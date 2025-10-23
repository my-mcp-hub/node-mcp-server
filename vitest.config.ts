import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globalSetup: ['./vitest.global.ts'],
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      include: ['src/**/*.ts'],
    },
    pool: 'threads',
    maxWorkers: 1,
  },
})
