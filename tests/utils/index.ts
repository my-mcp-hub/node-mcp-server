import type { OptionsType } from '../../src/types';

export const getOptions = () :OptionsType => {
  return {
    port: parseInt(process.env.PORT!),
  }
}
