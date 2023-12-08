// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'emerald',
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
})
