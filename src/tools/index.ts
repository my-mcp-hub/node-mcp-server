import { z } from 'zod'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { OptionsType } from '../types'

export const registerTools = (server: McpServer, options: OptionsType) => {
  server.tool(
    'GetData',
    '实时查询数据。',
    {
      keyword: z.string().describe('搜索关键字'),
    },
    ({ keyword }) => {
      return {
        content: [
          {
            type: 'text',
            text: `实时查询数据。${keyword}`,
          },
        ],
      }
    },
  )
}
