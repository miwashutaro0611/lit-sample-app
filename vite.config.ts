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
    lib: {
      entry: 'src/index.ts',
      name: 'LitSample',
      fileName: 'lit-sample',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
