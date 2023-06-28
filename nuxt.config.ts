// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    strict: true,
    shim: false,
    includeWorkspace: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
})
