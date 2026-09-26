import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH let the same code deploy to a GitHub Pages sub-path
// (e.g. https://kumararab.github.io/BAB-AL-HIDAYA) or the final domain at "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://babalhidaya.com',
  base: process.env.BASE_PATH || '/',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/company-profile') && !page.includes('/projects'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-AE', ar: 'ar-AE' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
