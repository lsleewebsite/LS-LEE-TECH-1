import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LS-LEE-TECH-1/'  // Match your actual repo name!
})
