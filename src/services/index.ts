import { McpServer } from '@modelcontextprotocol/server'
import { registerPrompts } from '@/prompts'
import { registerResources } from '@/resources'
import { registerTools } from '@/tools'
import type { ServerOptions, WebServerOptions } from '@/types'
import { stdioServer } from './stdio'
import { webServer } from './web'

export const createServer = (options: ServerOptions) => {
  const server = new McpServer(
    {
      name: options.name,
      version: options.version,
    },
    {
      instructions:
        'Search the knowledge base with search_documents, read the returned kb:// resource, then use review_document for a reusable review workflow.',
      cacheHints: {
        'tools/list': { ttlMs: 3_600_000, cacheScope: 'public' },
        'prompts/list': { ttlMs: 3_600_000, cacheScope: 'public' },
        'resources/list': { ttlMs: 3_600_000, cacheScope: 'public' },
        'resources/templates/list': { ttlMs: 3_600_000, cacheScope: 'public' },
      },
    },
  )
  registerTools(server)
  registerResources(server)
  registerPrompts(server)
  return server
}

export function startStdioServer(options: ServerOptions) {
  return stdioServer(() => createServer(options))
}

export async function startWebServer(options: WebServerOptions) {
  await webServer(options)
}
