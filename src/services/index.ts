import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { registerPrompts } from '@/prompts'
import { registerResources } from '@/resources'
import { registerTools } from '@/tools'
import type { OptionsType } from '@/types'
import { stdioServer } from './stdio'
import { webServer } from './web'

export const createServer = (options: OptionsType) => {
  const server = new McpServer({
    name: options.name,
    version: options.version,
  })
  registerTools(server, options)
  registerResources(server, options)
  registerPrompts(server)
  return server
}

export async function startStdioServer(options: OptionsType) {
  const server = createServer(options)
  await stdioServer(server)
}

export async function startWebServer(options: OptionsType) {
  const server = createServer(options)
  await webServer(server, options)
}
