import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig(({ command }) => {
  const base = '/'
  return {
    plugins: [
      react(),
      ViteImageOptimizer({
        webp: {
          quality: 90, // output WebP quality
        },
      }),
    ],
    base,
    build: {
      outDir: 'dist',
    },
  }
})
