/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
        `@import "@styles/variables.scss"; `
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, 'src/styles')
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
