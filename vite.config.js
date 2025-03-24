import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDotenv } from 'dotenv'
configDotenv()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
