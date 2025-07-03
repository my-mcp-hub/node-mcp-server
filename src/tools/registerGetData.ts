import { z } from 'zod'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { OptionsType } from '../types'

export default function register(server: McpServer, options: OptionsType) {
  server.registerTool(
    'GetData',
    {
      title: '查询企业工商照面信息',
      description: '实时查询数据',
      inputSchema: {
        keyword: z.string().describe('搜索关键字（企业名称、统一社会信用代码）'),
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
