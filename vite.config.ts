import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite config — https://vitejs.dev/config/
// The production base must be absolute. GitHub Pages serves this site from
// /BFSI/, and mock routes live one level deep (/BFSI/aboutus/), where a
// relative base would resolve assets against the wrong directory.
export default defineConfig(({ command }) => ({
  base: process.env.BASE_PATH || (command === 'build' ? '/BFSI/' : '/'),
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8443'),
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8443'),
  },
}))
