import type { McpServer } from '@modelcontextprotocol/server'
import { serveStdio } from '@modelcontextprotocol/server/stdio'

export function stdioServer(createServer: () => McpServer) {
  return serveStdio(createServer)
}
