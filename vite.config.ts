import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
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
