import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,

    // 🔥 Important for tunnels (zrok / https)
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },

    allowedHosts: true,

    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5001',
        changeOrigin: true,
        secure: false,
      },

      '/socket.io': {
        target: 'http://127.0.0.1:5001',
        changeOrigin: true,
        ws: true,
        secure: false,
        timeout: 60000,
      },
    },
  },
})