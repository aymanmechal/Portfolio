import { projects } from '../../app/data/projects'

// Sitemap XML généré à la demande : accueil, contact et chaque projet, en FR et EN.
export default defineEventHandler((event) => {
  const siteUrl = String(useRuntimeConfig(event).public.siteUrl).replace(/\/$/, '')
  const locales = ['fr', 'en'] as const

  const prefix = (locale: string) => (locale === 'fr' ? '' : `/${locale}`)

  const paths = [
    '/',
    '/contact',
    ...projects.map((project) => `/projects/${project.slug}`)
  ]

  const urls = paths
    .flatMap((path) =>
      locales.map((locale) => {
        const loc = `${siteUrl}${prefix(locale)}${path === '/' ? '' : path}` || siteUrl
        const alternates = locales
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${alt}" href="${siteUrl}${prefix(alt)}${path === '/' ? '' : path}" />`
          )
          .join('\n')
        return `  <url>
    <loc>${loc}</loc>
${alternates}
  </url>`
      })
    )
    .join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
})
