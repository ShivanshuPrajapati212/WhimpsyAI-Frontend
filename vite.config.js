import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDotenv } from 'dotenv'
configDotenv()

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      "/api": {
        target: 'https://whimpsyai-backend.vercel.app',
        changeOrigin: true
      },
    }
  },
  plugins: [react()],
})
