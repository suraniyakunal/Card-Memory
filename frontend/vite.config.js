import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import exts from 'framer-motion-ext';

export default defineConfig({
  plugins: [react(), exts({development: true})],
  assetsInclude: ['**/*.mp3'], // Allow Vite to handle .mp3 files as static assets
  server: {
    hmr: {
      overlay: false, // Disable the error overlay in development
    },
  },
});
