import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDotenv } from 'dotenv'
configDotenv()

const BACKEND_URL = process.env.BACKEND_URL

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      "/api": BACKEND_URL
    }
  },
  plugins: [react()],
})
