import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@': '/src',
    },
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      include: ['src/**/*.ts'],
    },
  },
})
