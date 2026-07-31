import { McpServer } from '@modelcontextprotocol/server'
import { registerPrompts } from '@/prompts'
import { registerResources } from '@/resources'
import { registerTools } from '@/tools'
import type { OptionsType } from '@/types'
import { stdioServer } from './stdio'
import { webServer } from './web'

export const createServer = (options: OptionsType) => {
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

export async function startStdioServer(options: OptionsType) {
  stdioServer(() => createServer(options))
}

export async function startWebServer(options: OptionsType) {
  await webServer(options)
}
