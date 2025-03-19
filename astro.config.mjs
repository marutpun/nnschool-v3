import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';
import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: { plugins: [yaml(), tailwindcss()] },
  adapter: netlify(),
});
