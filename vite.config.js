import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    eslintPlugin({
      // Configure the plugin to not fail the build
      failOnError: false,
      failOnWarning: false
    })
  ],
  server: {
    port: 8001,
  },
})
