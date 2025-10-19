import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Vite configuration for Vercel deployment
export default defineConfig({
  plugins: [react()],
  base: './', // important: use relative path for Vercel
})
