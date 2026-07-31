import 'dotenv/config'
import { Client, StreamableHTTPClientTransport } from '@modelcontextprotocol/client'
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio'
import { afterAll } from 'vitest'

const modernProtocolOptions = {
  versionNegotiation: {
    mode: {
      pin: '2026-07-28',
    },
  },
} as const

const stdioClient = new Client(
  {
    name: 'test-mcp-stdio-client',
    version: '1.0.0',
  },
  modernProtocolOptions,
)
await stdioClient.connect(
  new StdioClientTransport({
    command: 'c8',
    args: ['--reporter=lcov', '--reporter=text', 'tsx', './src/index.ts'],
    env: {
      ...(process.env as Record<string, string>),
      NODE_V8_COVERAGE: './coverage/tmp',
    },
  }),
)

const streamableClient = new Client(
  {
    name: 'test-mcp-client',
    version: '1.0.0',
  },
  modernProtocolOptions,
)

const streamableBaseUrl = new URL('http://localhost:8401/mcp')
const streamableClientTransport = new StreamableHTTPClientTransport(new URL(streamableBaseUrl))
await streamableClient.connect(streamableClientTransport)

global.clients = {
  stdio: stdioClient,
  streamable: streamableClient,
}

afterAll(async () => {
  await Promise.all(Object.values(global.clients).map(client => client.close()))
})
