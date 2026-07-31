#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { startStdioServer, startWebServer } from './services'
import { DEFAULT_PORT, getServerOptions, getWebServerOptions, parsePort } from './utils'
import 'dotenv/config'
import pkg from '../package.json' with { type: 'json' }

const name = 'node-mcp-server'
const identity = {
  name,
  version: pkg.version,
}

const startStdio = () => {
  startStdioServer(getServerOptions(identity))
}

try {
  await yargs(hideBin(process.argv))
    .scriptName(name)
    .usage('$0 [command] [options]')
    .command('$0', 'Start the server using the stdio transport protocol.', command => command, startStdio)
    .command('stdio', 'Start the server using the stdio transport protocol.', command => command, startStdio)
    .command(
      'web',
      'Start the server using Streamable HTTP.',
      command =>
        command.option('port', {
          describe: 'Port for the Streamable HTTP transport',
          type: 'number',
          default: process.env.PORT ?? DEFAULT_PORT,
          coerce: parsePort,
        }),
      argv => startWebServer(getWebServerOptions(argv, identity)),
    )
    .strict()
    .recommendCommands()
    .version(pkg.version)
    .help()
    .showHelpOnFail(false)
    .exitProcess(false)
    .fail((message, error) => {
      throw error ?? new Error(message)
    })
    .parse()
} catch (error) {
  const message = error instanceof Error ? error.message : String(error)
  console.error(`${name}: ${message}`)
  process.exitCode = 1
}
