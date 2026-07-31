import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { parsePort } from '@/utils'
import pkg from '../package.json' with { type: 'json' }

const projectRoot = fileURLToPath(new URL('..', import.meta.url))

const runCli = (args: string[], environment: NodeJS.ProcessEnv = {}) => {
  const env = { ...process.env }
  delete env.PORT

  return spawnSync(process.execPath, ['--import', 'tsx', 'src/index.ts', ...args], {
    cwd: projectRoot,
    encoding: 'utf8',
    env: { ...env, ...environment },
    timeout: 5000,
  })
}

describe('CLI contract', () => {
  test.each([
    ['number', 8401, 8401],
    ['numeric string', '8401', 8401],
    ['lowest port', 1, 1],
    ['highest port', 65535, 65535],
  ])('accepts a valid %s', (_name, input, expected) => {
    expect(parsePort(input)).toBe(expected)
  })

  test.each([0, 65536, -1, 1.5, '', 'not-a-port', undefined, null])('rejects invalid port %s', input => {
    expect(() => parsePort(input)).toThrow('Port must be an integer between 1 and 65535.')
  })

  test('prints help without starting the default stdio server', () => {
    const result = runCli(['--help'])

    expect(result.error).toBeUndefined()
    expect(result.status).toBe(0)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('node-mcp-server web')
    expect(result.stdout).not.toContain('MCP server started')
  })

  test('prints the package version', () => {
    const result = runCli(['--version'])

    expect(result.error).toBeUndefined()
    expect(result.status).toBe(0)
    expect(result.stderr).toBe('')
    expect(result.stdout.trim()).toBe(pkg.version)
  })

  test('rejects an invalid command-line port', () => {
    const result = runCli(['web', '--port', '0'])

    expect(result.status).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('Port must be an integer between 1 and 65535.')
  })

  test('rejects an invalid PORT environment variable', () => {
    const result = runCli(['web'], { PORT: 'invalid' })

    expect(result.status).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('Port must be an integer between 1 and 65535.')
  })

  test('does not accept web-only options for stdio', () => {
    const result = runCli(['stdio', '--port', '8401'])

    expect(result.status).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('Unknown argument: port')
  })
})
