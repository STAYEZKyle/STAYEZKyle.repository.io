export default defineNuxtConfig({
  srcDir: 'app/',

  modules: [
    '@pinia/nuxt'
  ],

  // Подключен CSS-препроцессор SCSS
  css: [
    '~/assets/styles/styles.scss'
  ],

  build: {
    transpile: ['@vuepic/vue-datepicker', '@vueform/multiselect']
  },

  app: {
    // Включаем плавные переходы между страницами
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Lenni Art - Выставки и Мероприятия',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Пространство Lenni Art: организация выставок, мастер-классов и концертов' },
        { property: 'og:title', content: 'Lenni Art' },
        { property: 'og:description', content: 'Актуальные выставки и мероприятия' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2026-06-08'
})
