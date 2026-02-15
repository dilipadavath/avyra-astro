import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      // Custom priority and changefreq per page
      customPages: [
        'https://avyra.co.in/',
        'https://avyra.co.in/about',
        'https://avyra.co.in/gallery',
        'https://avyra.co.in/kitchen',
        'https://avyra.co.in/wardrobes',
        'https://avyra.co.in/contact',
        'https://avyra.co.in/faq',
        'https://avyra.co.in/blog',
      ],
      
      // SEO enhancements
      serialize(item: any) {
        // Customize priority based on page importance
        if (item.url.endsWith('/')) {
          item.priority = 1.0; // Homepage
          item.changefreq = 'daily' as any;
        } else if (
          item.url.includes('kitchen') ||
          item.url.includes('wardrobes') ||
          item.url.includes('gallery')
        ) {
          item.priority = 0.9; // High-priority product pages
          item.changefreq = 'weekly' as any;
        } else if (
          item.url.includes('about') ||
          item.url.includes('contact') ||
          item.url.includes('faq')
        ) {
          item.priority = 0.8; // Important pages
          item.changefreq = 'weekly' as any;
        } else if (item.url.includes('blog')) {
          item.priority = 0.7; // Blog posts
          item.changefreq = 'weekly' as any;
        } else {
          item.priority = 0.5; // Other pages
          item.changefreq = 'monthly' as any;
        }
        
        return item;
      },
      
      // Filter out any unwanted URLs
      filter: (page) => {
        // Exclude 404 and any test pages
        return !page.includes('/404');
      },
      
      // Generate multiple sitemaps if site grows
      entryLimit: 45000,
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
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },

  ssr: {
    noExternal: ['lucide-react'],
  },
},

});
