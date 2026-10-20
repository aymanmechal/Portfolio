// Données projets pures (aucune dépendance Pinia / Nuxt) : utilisables par le store,
// le sitemap serveur et le SEO. Textes localisés : i18n/locales/{fr,en}/projects.json
// sous projects.items.<slug>. L'ordre du tableau = ordre d'affichage.

export type ProjectColor = 'yellow' | 'green' | 'blue' | 'orange'

/** Couleur du texte posé sur l'aplat du projet (contraste AA, cf. PLAN.md) */
export type TextOnColor = 'navy' | 'white'

/** Contexte du projet, traduit via projects.contexts.<clé> */
export type ProjectContext = 'school' | 'personal' | 'team'

export interface ProjectLinks {
  repo: string
  demo?: string
}

export interface Project {
  id: number
  slug: string
  title: string
  year: number
  color: ProjectColor
  textOnColor: TextOnColor
  context: ProjectContext
  /** Clés traduites via projects.tags.<clé> dans i18n */
  tags: string[]
  stack: string[]
  links: ProjectLinks
}

/** Classes d'aplat (classes complètes, pour que Tailwind les garde) */
export const PROJECT_COLORS: Record<ProjectColor, string> = {
  yellow: 'bg-yellow',
  green: 'bg-green',
  blue: 'bg-blue',
  orange: 'bg-orange'
}

export const TEXT_ON_COLOR: Record<TextOnColor, string> = {
  navy: 'text-navy',
  white: 'text-white'
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'cerealis',
    title: 'Cerealis',
    year: 2026,
    color: 'yellow',
    textOnColor: 'navy',
    context: 'personal',
    tags: ['ia', 'web', 'data'],
    stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'SQLite', 'scikit-learn', 'Docker Compose'],
    links: { repo: 'https://github.com/aymanmechal/Cerealis' }
  },
  {
    id: 4,
    slug: 'bibliotheque',
    title: 'Bibliothèque',
    year: 2025,
    color: 'green',
    textOnColor: 'navy',
    context: 'team',
    tags: ['poo', 'desktop', 'tests'],
    stack: ['Python', 'Tkinter', 'pytest', 'JSON', 'Git'],
    links: { repo: 'https://github.com/aymanmechal/library' }
  },
  {
    id: 3,
    slug: 'donjonpad',
    title: 'DonjonPAD',
    year: 2025,
    color: 'blue',
    textOnColor: 'white',
    context: 'personal',
    tags: ['jeu', 'desktop', 'poo'],
    stack: ['C#', '.NET', 'Avalonia'],
    links: { repo: 'https://github.com/aymanmechal/DonjonPAD' }
  },
  {
    id: 2,
    slug: 'portfolio',
    title: 'Portfolio',
    year: 2026,
    color: 'orange',
    textOnColor: 'navy',
    context: 'personal',
    tags: ['web', 'design'],
    stack: ['Nuxt 4', 'Vue 3', 'Tailwind CSS', 'Pinia', 'vee-validate', '@nuxtjs/i18n'],
    links: { repo: 'https://github.com/aymanmechal/Portfolio' }
  }
]
