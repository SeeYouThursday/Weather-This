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
    outDir: 'dist',
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom'],
        },
      },
    },
  },
});
