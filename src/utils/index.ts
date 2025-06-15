import { OptionsType } from '../types'
import type { ArgumentsCamelCase } from 'yargs'

export function getOptions(argv: ArgumentsCamelCase) {
  return {
    url: argv.url,
    key: argv.key,
    secretKey: argv.secret_key,
    port: argv.port,
  } as OptionsType
}
