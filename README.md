# Node.js MCP Server Template

A Fastify-based MCP TypeScript SDK 2.0 server template using the `2026-07-28` protocol over stdio and Streamable HTTP.

[![][npm-release-shield]][npm-release-link]
[![][codecov-shield]][codecov-link]
[![][github-release-date-shield]][github-release-date-link]
[![][github-action-build-shield]][github-action-build-link]
[![][github-license-shield]][github-license-link]

The built-in knowledge-base example demonstrates how the three server primitives work together:

1. Call the `search_documents` Tool to find one of three MCP guides.
2. Read the returned `kb://documents/{documentId}` Resource URI.
3. Get the `review_document` Prompt to review the same document.

The example is deterministic and has no external data dependency. Tool results include both
`structuredContent` and text content, resources are Markdown documents with stable URIs, and missing
resources return a protocol-level Resource Not Found error.

The HTTP endpoint uses `@modelcontextprotocol/fastify` with Fastify 5. Its default localhost binding
validates `Host` and `Origin` headers to protect local development servers from DNS rebinding.

## Development

Requires Node.js 22 and npm 10. The repository's `.nvmrc`, `packageManager`, and `package-lock.json`
define the supported local and CI toolchain.

```bash
nvm use
npm ci
npm run dev:stdio
```

Run the Streamable HTTP transport on `http://localhost:8401/mcp`:

```bash
npm run dev:web
```

Run the same verification stages used by CI:

```bash
npm run check
```

The individual stages are also available as `npm run lint`, `npm run typecheck`, `npm run build`,
`npm test`, and `npm run coverage`. The production build is a minified Node.js 22 ESM executable at
`build/index.js`.

Inspect the npm package before publishing:

```bash
npm pack --dry-run
```

## Usage

```bash
# Start with stdio transport (default)
node build/index.js

# Start with Streamable HTTP
node build/index.js web --port 8401
```

## Environment Variables

- `PORT`: Streamable HTTP port (default: `8401`)
- `NODE_ENV`: `production` for production builds or `local` for development
- `MCP_INSPECTOR_API_TOKEN`: optional stable token for the MCP Inspector development session

## License

[MIT](LICENSE)

[npm-release-link]: https://www.npmjs.com/package/@my-mcp-hub/node-mcp-server
[npm-release-shield]: https://img.shields.io/npm/v/@my-mcp-hub/node-mcp-server?color=1677FF&labelColor=black&logo=npm&logoColor=white&style=flat-square
[codecov-link]: https://codecov.io/gh/my-mcp-hub/node-mcp-server
[codecov-shield]: https://img.shields.io/codecov/c/github/my-mcp-hub/node-mcp-server?color=1677FF&labelColor=black&style=flat-square&logo=codecov&logoColor=white
[github-release-date-link]: https://github.com/my-mcp-hub/node-mcp-server/releases
[github-release-date-shield]: https://img.shields.io/github/release-date/my-mcp-hub/node-mcp-server?color=1677FF&labelColor=black&style=flat-square
[github-action-build-link]: https://github.com/my-mcp-hub/node-mcp-server/actions/workflows/build.yml
[github-action-build-shield]: https://img.shields.io/github/actions/workflow/status/my-mcp-hub/node-mcp-server/build.yml?branch=main&color=1677FF&label=build&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-license-link]: https://github.com/my-mcp-hub/node-mcp-server/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/my-mcp-hub/node-mcp-server?color=1677FF&labelColor=black&style=flat-square
