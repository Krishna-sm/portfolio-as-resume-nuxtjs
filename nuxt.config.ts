// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/font.css','~/assets/css/color.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui:{
    global:true,
    //@ts-ignore
    notifications:{
               position: 'top-0 bottom-auto'
    }
},

  modules: ["@nuxt/icon", "@nuxt/ui"]
})