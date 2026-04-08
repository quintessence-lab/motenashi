// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://quintessence-lab.github.io',
  base: '/motenashi',
  output: 'static',
  integrations: [sitemap()],
});
