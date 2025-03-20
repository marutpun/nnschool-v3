import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';

export default defineConfig({
  vite: { plugins: [yaml(), tailwindcss()] },
  adapter: netlify(),
  integrations: [partytown({ config: { forward: ['dataLayer.push'] } })],
});
