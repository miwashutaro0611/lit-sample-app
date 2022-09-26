import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      external: /^lit/,
      input: ['src/index.ts', 'src/react.ts'],
    }
  }
})
