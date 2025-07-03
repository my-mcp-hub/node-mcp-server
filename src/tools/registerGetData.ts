import { z } from 'zod'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { OptionsType } from '@/types'

export default function register(server: McpServer, options: OptionsType) {
  server.registerTool(
    'GetData',
    {
      title: 'Get Data',
      description: 'Get Data',
      inputSchema: {
        keyword: z.string().describe('search keyword'),
      },
    },
    async ({ keyword }) => {
      const { success, data, message } = await getData(keyword, options)
      return {
        content: [
          {
            type: 'text',
            text: success ? JSON.stringify(data) : message!,
          },
        ],
      }
    },
  )
}

export const getData = async (keyword: string, options: OptionsType) => {
  if (keyword === 'error') {
    return {
      success: false,
      message: 'not found',
    }
  }
  return {
    success: true,
    data: `keyword: ${keyword}; options: ${JSON.stringify(options, null, 2)}`,
  }
}
