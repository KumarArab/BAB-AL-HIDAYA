import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL / BASE_PATH let the same code deploy to a GitHub Pages sub-path
// (e.g. https://kumararab.github.io/BAB-AL-HIDAYA) or the final domain at "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://babalhidaya.ae',
  base: process.env.BASE_PATH || '/',
  vite: { plugins: [tailwindcss()] },
});
