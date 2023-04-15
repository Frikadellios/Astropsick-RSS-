import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import node from "@astrojs/node";
import yaml from '@rollup/plugin-yaml';
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: 'https://devopsick.com/',
  output: 'server',
  vite: {
    plugins: [yaml()]
  },
  integrations: [
  tailwind({
    config: {
      applyBaseStyles: false
    }}), 
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), 
  relativeLinks(),
  sitemap(), 
  react(), 
  mdx(), ],
  adapter: node({
    mode: "standalone"
  })
});