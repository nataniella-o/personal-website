import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (see public/CNAME) serves from the root, so base is '/'.
export default defineConfig({
  plugins: [react()],
})
