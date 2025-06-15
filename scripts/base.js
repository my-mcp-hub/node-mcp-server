import path from 'path'
import { fileURLToPath } from 'url'
import { promises as fs } from 'fs'
import { spawn } from 'child_process'
import { rimraf } from 'rimraf'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'local'
let inspectorProcess = null
let webProcess = null

/** @type {import('esbuild').BuildOptions} */
export const config = {
  entryPoints: [path.resolve(__dirname, '../src/index.ts')],
  outfile: path.resolve(__dirname, '../build/index.js'),
  format: 'esm',
  bundle: true,
  sourcemap: isDev,
  minify: isProd,
  platform: 'node',
  external: ['yargs', 'node-fetch', 'cors', 'express', 'nanoid', 'zod', 'dotenv', '@modelcontextprotocol/sdk'],
  plugins: [
    {
      name: 'build-plugin',
      setup(build) {
        build.onStart(async result => {
          await after(result)
        })
        build.onEnd(async result => {
          await before(result)
        })
      },
    },
  ],
}

const after = async () => {
  await rimraf('build')
}

const before = async result => {
  await fs.chmod('build/index.js', 0o755)
  console.log('✅ chmod 755 build/index.js done')
  if (isDev) {
    if (result.errors.length === 0) {
      console.log('✅ Rebuild succeeded')
    } else {
      console.error('❌ Rebuild failed')
    }

    console.log('🚀 Starting @modelcontextprotocol/inspector...')
    if (inspectorProcess) {
      inspectorProcess.kill('SIGINT')
    }
    inspectorProcess = spawn('npx', ['@modelcontextprotocol/inspector', 'build/index.js'], {
      stdio: 'inherit',
      shell: true,
    })

    if (process.env.TRANSPORT === 'web') {
      if (webProcess) {
        webProcess.kill('SIGINT')
      }
      webProcess = spawn('node', ['build/index.js', 'web'], {
        stdio: 'inherit',
      })
    }
  }
}
