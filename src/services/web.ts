import { createMcpFastifyApp } from '@modelcontextprotocol/fastify'
import { toNodeHandler } from '@modelcontextprotocol/node'
import { createMcpHandler } from '@modelcontextprotocol/server'
import { createServer } from '@/services'
import type { WebServerOptions } from '@/types'

export async function webServer(options: WebServerOptions) {
  const app = createMcpFastifyApp()
  const handler = createMcpHandler(() => createServer(options))
  const nodeHandler = toNodeHandler(handler)

  app.all('/mcp', (request, reply) => nodeHandler(request.raw, reply.raw, request.body))

  await app.listen({ port: options.port })
  let closing: Promise<void> | undefined

  const close = () => {
    closing ??= (async () => {
      const appClosed = app.close()
      await handler.close()
      await appClosed
    })()
    return closing
  }

  const shutdown = () => {
    close().catch(error => {
      console.error('Failed to close MCP web server', error)
      process.exitCode = 1
    })
  }

  process.once('SIGINT', shutdown)
  process.once('SIGTERM', shutdown)

  console.log(`MCP server started on port ${options.port}. Streamable HTTP endpoint: /mcp`)
}
