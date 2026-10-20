import { toValue, type MaybeRefOrGetter } from 'vue'

export interface SiteSeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  /** Ajoute <meta name="robots" content="noindex"> (ex. page introuvable). */
  noindex?: boolean
  /** Blocs JSON-LD supplémentaires à injecter dans le <head>. */
  jsonLd?: MaybeRefOrGetter<Record<string, unknown>[]>
}

export const PERSON_NAME = 'Ayman Mechal'
export const PERSON_SAME_AS = [
  'https://github.com/aymanmechal',
  'https://linkedin.com/in/ayman-mechal'
]
export const PERSON_EMAIL = 'ayman.mechal@icloud.com'
export const PERSON_TELEPHONE = '+33767423645'
export const PERSON_KNOWS_ABOUT = [
  'Java',
  'Python',
  'C#',
  'PHP',
  'TypeScript',
  'SQL',
  'Vue.js',
  'Nuxt',
  'FastAPI',
  'Docker',
  'Git'
]

/** URL absolue du site, configurée via NUXT_PUBLIC_SITE_URL (nuxt.config.ts). */
export const useSiteUrl = () => {
  const config = useRuntimeConfig()
  return String(config.public.siteUrl).replace(/\/$/, '')
}

/** Identifiant stable de l'entité Person, réutilisé par les SoftwareSourceCode. */
export const personId = (siteUrl: string) => `${siteUrl}/#person`

/** JSON-LD Person (page d'accueil). */
export const personSchema = (siteUrl: string, jobTitle: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId(siteUrl),
  name: PERSON_NAME,
  url: siteUrl,
  jobTitle,
  email: PERSON_EMAIL,
  telephone: PERSON_TELEPHONE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bordeaux',
    addressRegion: 'Nouvelle-Aquitaine',
    addressCountry: 'FR'
  },
  affiliation: {
    '@type': 'EducationalOrganization',
    name: 'Sup de Vinci',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bordeaux',
      addressCountry: 'FR'
    }
  },
  knowsAbout: PERSON_KNOWS_ABOUT,
  sameAs: PERSON_SAME_AS,
  knowsLanguage: ['fr', 'en']
})

/** JSON-LD SoftwareSourceCode pour un projet. */
export const softwareSourceCodeSchema = (
  siteUrl: string,
  project: { name: string; description: string; repo: string; keywords: string[]; url: string }
) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: project.name,
  description: project.description,
  codeRepository: project.repo,
  url: project.url,
  keywords: project.keywords.join(', '),
  author: { '@id': personId(siteUrl) }
})

/**
 * Méta SEO commune : title/description, Open Graph, Twitter Card,
 * hreflang + canonical (useLocaleHead) et JSON-LD optionnel.
 */
export const useSiteSeo = (options: SiteSeoOptions) => {
  const localeHead = useLocaleHead({ dir: true, lang: true, seo: true })

  useHead(() => {
    const head = localeHead.value
    return {
      htmlAttrs: head.htmlAttrs,
      link: head.link,
      meta: head.meta,
      script: (toValue(options.jsonLd) ?? []).map((block) => ({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(block)
      }))
    }
  })

  useSeoMeta({
    title: () => toValue(options.title),
    description: () => toValue(options.description),
    ogTitle: () => toValue(options.title),
    ogDescription: () => toValue(options.description),
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: () => toValue(options.title),
    twitterDescription: () => toValue(options.description),
    robots: options.noindex ? 'noindex, nofollow' : 'index, follow'
  })
}
