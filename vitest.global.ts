import { spawn } from 'child_process'
import { waitForValue } from './tests/utils'

export default async function setup() {
  const webProcess = spawn('c8', ['--reporter=lcov', '--reporter=text', 'tsx', './src/index.ts', 'web'], {
    stdio: 'pipe',
    env: {
      ...process.env as Record<string, string>,
      NODE_V8_COVERAGE: './coverage/tmp',
    },
  })
  let webStarted = false
  webProcess.stdout?.on('data', async (data) => {
    const output = data.toString()
    if (output.includes('MCP server started')) {
      webStarted = true
    }
    console.log(output)
  });
  await waitForValue(() => webStarted)
  return () => {
    webProcess.kill('SIGINT')
  }
}
