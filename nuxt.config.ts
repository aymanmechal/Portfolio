export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],

  postcss: {
    plugins: {
      tailwindcss: {}
    }
  },

  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        name: 'Francais',
        files: [
          'fr/common.json',
          'fr/header.json',
          'fr/presentation.json',
          'fr/about.json',
          'fr/skills.json',
          'fr/parcours.json',
          'fr/contact.json',
          'fr/footer.json',
          'fr/auth.json'
        ]
      },
      {
        code: 'en',
        name: 'English',
        files: [
          'en/common.json',
          'en/header.json',
          'en/presentation.json',
          'en/about.json',
          'en/skills.json',
          'en/parcours.json',
          'en/contact.json',
          'en/footer.json',
          'en/auth.json'
        ]
      }
    ],
  }
})
