import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  site: 'https://avyra.co.in/',
  output: 'static',
  
  // Performance & SEO optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  
  // Vite optimizations for faster builds and page loads
 vite: {
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },

  build: {
    cssMinify: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'radix-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },

  ssr: {
    noExternal: ['lucide-react'],
    external: ['framer-motion'],
  },
  
  // Performance: Enable prefetcher
  prefetch: {
    prefetchAll: true,
  },
},

});
