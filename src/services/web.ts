import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import cors from '@fastify/cors'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js'
import { generateSessionId } from '@/utils'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { OptionsType } from '@/types'

export async function webServer(server: McpServer, options: OptionsType) {
  const app = Fastify({
    logger: true,
  })

  await app.register(cors, {})

  const transports = {
    streamable: {} as Record<string, StreamableHTTPServerTransport>,
    sse: {} as Record<string, SSEServerTransport>,
  }
  app.post('/mcp', async (request, reply) => {
    const sessionId = request.headers['mcp-session-id'] as string | undefined
    let transport: StreamableHTTPServerTransport

    if (sessionId && transports.streamable[sessionId]) {
      transport = transports.streamable[sessionId]
    } else if (!sessionId && isInitializeRequest(request.body)) {
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => generateSessionId(),
        onsessioninitialized: sessionId => {
          transports.streamable[sessionId] = transport
        },
      })

      transport.onclose = () => {
        if (transport.sessionId) {
          delete transports.streamable[transport.sessionId]
        }
      }
      await server.connect(transport)
    } else {
      reply.status(400).send({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided',
        },
        id: null,
      })
      return
    }

    await transport.handleRequest(request.raw, reply.raw, request.body)
  })

  const handleSessionRequest = async (request: FastifyRequest, reply: FastifyReply) => {
    const sessionId = request.headers['mcp-session-id'] as string | undefined
    if (!sessionId || !transports.streamable[sessionId]) {
      reply.status(400).send('Invalid or missing session ID')
      return
    }

    const transport = transports.streamable[sessionId]
    await transport.handleRequest(request.raw, reply.raw)
  }

  app.get('/mcp', handleSessionRequest)

  app.delete('/mcp', handleSessionRequest)

  app.get('/sse', async (_request, reply) => {
    const transport = new SSEServerTransport('/messages', reply.raw)
    transports.sse[transport.sessionId] = transport

    reply.raw.on('close', () => {
      delete transports.sse[transport.sessionId]
    })

    await server.connect(transport)
  })

  app.post('/messages', async (request, reply) => {
    const { sessionId } = request.query as { sessionId: string }
    const transport = transports.sse[sessionId]
    if (transport) {
      await transport.handlePostMessage(request.raw, reply.raw, request.body)
    } else {
      reply.status(400).send('No transport found for sessionId')
    }
  })

  app.listen({ port: options.port }, (err, address) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    console.log(`MCP server started on ${address}. SSE endpoint: /sse, streamable endpoint: /mcp`)
  })
}
