import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [mdx(), react()],
  vite: { plugins: [yaml(), tailwindcss()] },
  adapter: netlify(),
});