import type { Client } from '@modelcontextprotocol/client'

declare global {
  var clients: Record<'stdio' | 'streamable', Client>
}
