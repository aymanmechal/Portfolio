// URL publique du site (canonical, hreflang, sitemap, JSON-LD).
// En production : NUXT_PUBLIC_SITE_URL=https://votre-domaine.tld
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')

// Sous-dossier de déploiement (GitHub Pages : /Portfolio/). Lu aussi par Nuxt au runtime.
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

// Pages à générer en statique (en plus de celles découvertes en suivant les liens).
const projectSlugs = ['cerealis', 'bibliotheque', 'donjonpad', 'portfolio']
const prerenderRoutes = ['', '/en'].flatMap((prefix) => [
  prefix || '/',
  `${prefix}/contact`,
  ...projectSlugs.map((slug) => `${prefix}/projects/${slug}`)
])

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      siteUrl
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s',
      title: 'Ayman Mechal',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ayman Mechal, développeur web et logiciel : applications Vue et Nuxt, API Python, jeux desktop en C#.' },
        { name: 'author', content: 'Ayman Mechal' },
        { name: 'theme-color', content: '#f6f1ec' },
        { property: 'og:site_name', content: 'Ayman Mechal' },
        { property: 'og:type', content: 'website' }
      ],
      link: [{ rel: 'icon', href: `${baseURL}favicon.ico` }]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [...prerenderRoutes, '/sitemap.xml']
    }
  },

  css: ['~/assets/scss/main.scss'],

  fonts: {
    families: [
      { name: 'Bricolage Grotesque', provider: 'google', weights: [600, 800], display: 'swap' },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600], display: 'swap' },
      { name: 'Fraunces', provider: 'google', weights: [400], styles: ['italic'], display: 'swap' }
    ]
  },

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
    // Origine seule : i18n ajoute lui-même app.baseURL au chemin.
    baseUrl: new URL(siteUrl).origin,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        language: 'fr-FR',
        name: 'Français',
        files: [
          'fr/common.json',
          'fr/header.json',
          'fr/presentation.json',
          'fr/about.json',
          'fr/skills.json',
          'fr/parcours.json',
          'fr/contact.json',
          'fr/footer.json',
          'fr/auth.json',
          'fr/seo.json',
          'fr/projects.json'
        ]
      },
      {
        code: 'en',
        language: 'en-US',
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
          'en/auth.json',
          'en/seo.json',
          'en/projects.json'
        ]
      }
    ],
  }
})
