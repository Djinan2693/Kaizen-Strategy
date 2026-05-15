import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimisation pour la production
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    },
    // Compression et optimisation
    target: 'esnext',
    sourcemap: false,
    // Optimisation pour PWA
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096
  },
  server: {
    // Configuration pour le développement
    host: true,
    port: 5656,
    strictPort: true,
    // Proxy vers le serveur backend
    proxy: {
      '/api': {
        target: 'http://localhost:5555',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  preview: {
    port: 4173,
    host: true
  },
  // PWA et assets
  publicDir: 'public',
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.webp', '**/*.ico', '**/*.json'],
  // Optimisation CSS
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js'
  },
  // Base URL pour déploiement
  base: './',
  // Optimisation pour mobile et PWA
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString())
  }
});
