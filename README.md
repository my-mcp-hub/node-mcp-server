# Node.js MCP Server Template

A Model Context Protocol (MCP) server template for Node.js applications. This template provides a foundation for building MCP-compatible servers with support for multiple transport protocols.

## Features
- Multiple Transport Protocols :

    - Standard I/O (stdio) for command-line interfaces
    - HTTP Streamable transport for web applications
    - Server-Sent Events (SSE) for real-time updates
- TypeScript Support : Built with TypeScript for type safety and better developer experience
- Development Tools :

    - Hot reloading during development
    - Integration with MCP Inspector for debugging
    - ESLint and Prettier for code quality
    - Husky and lint-staged for Git hooks
- Extensible Tool System : Easy registration of custom MCP tools

## Prerequisites
- Node.js (latest LTS version recommended)
- npm or yarn

## Installation

```bash
npm install
```

## Development
```bash
# Start development server with stdio transport
npm run dev

# Start development server with web transport
npm run dev:web
```

When using dev:web , the server will be available at:

- Streamable HTTP endpoint: http://localhost:8401/mcp
- SSE endpoint: http://localhost:8401/sse

## Building
```bash
npm run build
```
The build output will be in the build directory.

## Usage
### Command Line
```bash
# Start with stdio transport (default)
node build/index.js

# Start with web transport
node build/index.js web --port 8401
```
### Adding Custom Tools
Custom tools can be added in the src/tools/index.ts file:

```ts
server.tool(
  'YourToolName',
  'Tool description',
  {
    // Define parameters using Zod schema
    param1: z.string().describe('Parameter description'),
  },
  ({ param1 }) => {
    // Implement tool logic
    return {
      content: [
        {
          type: 'text',
          text: `Your tool response: ${param1}`,
        },
      ],
    }
  },
)
```

## Environment Variables
- PORT : Specify the port for web transport (default: 8401)
- NODE_ENV : Set to production for production builds or local for development

## License
[MIT](LICENSE)
