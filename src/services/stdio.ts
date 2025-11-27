import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

export async function stdioServer(server: McpServer) {
  const transport = new StdioServerTransport()
  await server.connect(transport)
}
