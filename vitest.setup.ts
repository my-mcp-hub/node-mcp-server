import 'dotenv/config'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'

const client = new Client({
  name: 'test-mcp-client',
  version: '1.0.0',
})

const stdioClientTransport = new StdioClientTransport({
  command: 'c8',
  args: ['--reporter=lcov', '--reporter=text', 'tsx', './src/index.ts'],
  env: {
    ...(process.env as Record<string, string>),
    NODE_V8_COVERAGE: './coverage/tmp',
  },
})
await client.connect(stdioClientTransport)

const streamableBaseUrl = new URL('http://localhost:8401/mcp')
const streamableClientTransport = new StreamableHTTPClientTransport(new URL(streamableBaseUrl))
await client.connect(streamableClientTransport)

const sseBaseUrl = new URL('http://localhost:8401/sse')
const sseClientTransport = new SSEClientTransport(new URL(sseBaseUrl))
await client.connect(sseClientTransport)

global.client = client
