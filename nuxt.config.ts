// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
     '@pinia/nuxt'
  ],
   pages: true,
  runtimeConfig: {
    public: {
       API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
       API_KEY: process.env.NUXT_PUBLIC_API_KEY || 'NONE',
    },
  },

  ssr: false,  // IMPORTANT: disables server-side rendering
  target: 'static',  // legacy but still helps clarify intent
  app: {
    baseURL: '/', // or use `/your-subfolder/` if hosting in subfolder
  }
  


})