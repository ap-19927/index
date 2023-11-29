// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
      "output": {
          dir: 'output',
          serverDir: 'output/server',
          publicDir: 'output/public'
      }
  }
})
