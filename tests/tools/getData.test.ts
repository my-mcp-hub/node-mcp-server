import { describe, expect, test } from 'vitest';
import { getData } from '../../src/tools/registerGetData';
import { getOptions } from '../utils';

describe('getData', () => {
  const options = getOptions();
  test('returns controller data for a valid input', async () => {
    expect(await getData('test', options)).toHaveProperty('data', 'keyword: test;');
  });

  test('returns a "not found" response for an unrecognized input', async () => {
    expect(await getData('error', options)).toStrictEqual({
        'message': 'not found',
        'success': false,
      }
    );
  });

  test('returns a "not found" response for empty input', async () => {
    expect(await getData('', options)).toStrictEqual({
        'message': 'not found',
        'success': false,
      }
    );
  });
});
