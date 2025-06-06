// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import { resolve } from 'path';
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  alias: {
    assets: '/<rootDir>/assets',
  },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
