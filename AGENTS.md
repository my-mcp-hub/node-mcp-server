# Repository guide

## Toolchain and commands

- Use Node 22 (`.nvmrc`) and npm 10; `package-lock.json` is the dependency source of truth. Use `npm ci` for a clean install.
- Match CI verification order with `npm run check`: lint, build (type-check plus esbuild), then coverage.
- Run one test file with `npx vitest run tests/tools/index.test.ts`; add `-t 'test name'` for one case.
- `npm run dev:stdio` and `npm run dev:web` watch the source and start MCP Inspector. The web endpoint is `http://localhost:8401/mcp`.
- `npm pack --dry-run` validates the publish allowlist; the `prepack` hook always creates a fresh production build.

## Architecture and invariants

- `src/index.ts` is the CLI entrypoint. No command defaults to stdio; `web` selects Streamable HTTP.
- `src/services/index.ts#createServer` is the shared server factory. Register tools, resources, and prompts through their `src` registrars so both transports expose the same behavior.
- The HTTP transport uses Fastify. Do not copy Express-specific middleware or lifecycle code from the upstream starter.
- Built-in knowledge-base records live in `src/data/documents.ts`. Keep IDs, URIs, metadata, completion values, and tests synchronized.
- The server and tests pin MCP protocol `2026-07-28`. Avoid session-ID-dependent behavior because the HTTP handler creates independent server instances.
- Tools with an `outputSchema` must return matching `structuredContent` and a text fallback.

## Test and runtime gotchas

- Vitest global setup launches a real web server and setup launches a real stdio child; tests exercise both transports.
- Tests connect HTTP at port 8401. Keep Vitest at one worker because the shared port and clients are not safe for parallel workers.
- Never write ordinary logs to stdout on the stdio path; stdout carries MCP protocol messages.
- `src/assets/mcp.stdio.json` and `src/assets/mcp.http.json` configure Inspector launch targets.

## Workflow

- Keep Fastify application behavior separate from build-tool changes.
- Pre-commit checks staged `src/**/*.{ts,js}` with Biome. `npm run lint` covers the same source tree; type-checking and Vitest validate tests and build configuration.
- Commit messages use the Conventional Commit types configured in `commitlint.config.js`.
