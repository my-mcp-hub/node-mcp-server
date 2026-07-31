import { spawn } from 'node:child_process'
import { randomBytes } from 'node:crypto'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { rimraf } from 'rimraf'
import kill from 'tree-kill'

const dirname = import.meta.dirname
const projectRoot = path.resolve(dirname, '..')
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'local'
let inspectorProcess = null
let webProcess = null
let autoOpenBrowser = true
const inspectorApiToken = process.env.MCP_INSPECTOR_API_TOKEN ?? randomBytes(32).toString('hex')

/** @type {import('esbuild').BuildOptions} */
export const config = {
  absWorkingDir: projectRoot,
  entryPoints: [path.resolve(projectRoot, 'src/index.ts')],
  outfile: path.resolve(projectRoot, 'build/index.js'),
  format: 'esm',
  bundle: true,
  sourcemap: isDev,
  minify: isProd,
  platform: 'node',
  target: 'node22',
  packages: 'external',
  legalComments: 'none',
  alias: {
    '@': path.resolve(projectRoot, 'src'),
  },
  plugins: [
    {
      name: 'build-plugin',
      setup(build) {
        build.onStart(async result => {
          await before(result)
        })
        build.onEnd(async result => {
          await after(result)
        })
      },
    },
  ],
}

const before = async () => {
  await rimraf(path.resolve(projectRoot, 'build'))
}

const after = async result => {
  if (result.errors.length > 0) {
    console.error('❌ Build failed')
    return
  }

  const outputFile = path.resolve(projectRoot, 'build/index.js')
  await fs.chmod(outputFile, 0o755)
  console.log('✅ chmod 755 build/index.js done')

  if (isDev) {
    console.log('✅ Rebuild succeeded')

    const inspectorConfig =
      process.env.TRANSPORT === 'web'
        ? path.resolve(projectRoot, 'src/assets/mcp.http.json')
        : path.resolve(projectRoot, 'src/assets/mcp.stdio.json')

    if (process.env.TRANSPORT === 'web') {
      if (webProcess) {
        webProcess.kill('SIGINT')
      }
      webProcess = spawn(process.execPath, [outputFile, 'web'], {
        cwd: projectRoot,
        stdio: 'inherit',
      })
    }

    console.log('🚀 Starting @modelcontextprotocol/inspector...')
    if (inspectorProcess) {
      kill(inspectorProcess.pid, 'SIGINT')
    }
    inspectorProcess = spawn('npx', ['@modelcontextprotocol/inspector', '--web', '--config', inspectorConfig], {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        MCP_INSPECTOR_API_TOKEN: inspectorApiToken,
        MCP_AUTO_OPEN_ENABLED: String(autoOpenBrowser),
      },
    })
    autoOpenBrowser = false
  }
}
