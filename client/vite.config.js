import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    minify: true, // Enable minification for the production build
    sourcemap: false, // Disable sourcemaps for the production build
    // You can add more build options as needed
  },
});
