import type { ArgumentsCamelCase } from 'yargs'
import type { OptionsType } from '@/types'

export function getOptions(argv: ArgumentsCamelCase) {
  return {
    url: argv.url,
    key: argv.key,
    secretKey: argv.secret_key,
    port: argv.port,
  } as OptionsType
}
