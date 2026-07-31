# Repository guide

## Toolchain and verification

- Use Node 22 (`.nvmrc`) and npm 10; `package-lock.json` is the dependency source of truth. Use `npm ci` for a clean install.
- `npm run check` matches CI's lint, build, coverage sequence; build itself runs type-check, esbuild, then `tsc-alias`.
- Run one test file with `npx vitest run tests/tools/index.test.ts`; add `-t 'test name'` for one case.
- `npm run dev:stdio` and `npm run dev:web` watch the source and start MCP Inspector. The web endpoint is `http://localhost:8401/mcp`.
- `npm pack --dry-run` validates the publish allowlist and triggers a fresh production build; CI uses `--ignore-scripts` only because it builds first.

## Architecture and invariants

- `src/index.ts` is the CLI entrypoint. Omitting the command starts stdio; `stdio` is also accepted explicitly, while `web` selects Streamable HTTP. Only `web` accepts `--port`; it and `PORT` must resolve to an integer from 1 to 65535.
- Production builds preserve every `src/**/*.ts` module under `build` with `bundle: false`; `tsc-alias` rewrites `@/` imports and adds Node ESM `.js` suffixes. Keep `scripts/aliasReplacer.cjs`, `tsconfig.json`, and the esbuild output layout synchronized.
- `src/services/index.ts#createServer` is the shared server factory. Register tools, resources, and prompts through their `src` registrars so both transports expose the same behavior.
- The HTTP transport uses Fastify; Express middleware and lifecycle patterns do not apply.
- `src/data/documents.ts` is the single built-in knowledge-base source; record changes affect tool ranking, resource URIs/listing, prompt completion, and their tests.
- The server and tests pin MCP protocol `2026-07-28`. Avoid session-ID-dependent behavior because the HTTP handler creates independent server instances.
- Tools with an `outputSchema` must return matching `structuredContent` and a text fallback.

## Test and runtime gotchas

- Vitest global setup launches a real web server and setup launches a real stdio child; transport tests iterate over both clients.
- Even a focused test starts HTTP on port 8401. Stop `dev:web` or any other listener first, and keep Vitest at one worker because the shared port and global clients are not parallel-safe.
- Never write ordinary logs to stdout on the stdio path; stdout carries MCP protocol messages.
- `src/assets/mcp.stdio.json` and `src/assets/mcp.http.json` configure Inspector launch targets.

## Hooks and scope

- Pre-commit formats/checks only staged `src/**/*.{ts,js}` with Biome. `npm run lint` also covers only `src`, while `npm run typecheck` includes tests and root Vitest config/setup files.
- Commit messages use the Conventional Commit types configured in `commitlint.config.js`.
