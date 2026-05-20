import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://psychosassquatch.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
