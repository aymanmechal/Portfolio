export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        slug: 'portfolio-v1',
        title: 'Portfolio V1',
        subtitle: 'Site vitrine personnel',
        excerpt: 'Creation d’un portfolio web pour presenter mes competences et projets.',
        description:
          'Projet de cours simple avec une page d’accueil, une section a propos et une page de contact.',
        image: '/images/lion.png',
        tags: ['HTML', 'CSS', 'JS'],
        stack: ['HTML', 'CSS', 'JavaScript'],
        features: [
          'Structure responsive',
          'Cartes de projet',
          'Formulaire de contact statique'
        ],
        links: {
          repo: 'https://github.com/aymanmechal',
          demo: '#'
        }
      },
      {
        id: 2,
        slug: 'gestion-evenements',
        title: 'Gestion Evenements',
        subtitle: 'Application de cours',
        excerpt: 'Mini app pour organiser des evenements et gerer les inscriptions.',
        description:
          'Interface simple avec liste d’evenements, details et formulaire d’inscription.',
        image: '/images/lion.png',
        tags: ['Vue', 'CSS'],
        stack: ['Vue 3', 'Pinia', 'CSS'],
        features: [
          'Liste + detail par route',
          'Store centralise',
          'Composants reutilisables'
        ],
        links: {
          repo: 'https://github.com/aymanmechal',
          demo: '#'
        }
      },
      {
        id: 3,
        slug: 'dashboard-stat',
        title: 'Dashboard Stat',
        subtitle: 'Interface statique',
        excerpt: 'Tableau de bord avec cartes statistiques et filtres basiques.',
        description:
          'Mise en page claire pour afficher des chiffres, graphiques et indicateurs.',
        image: '/images/lion.png',
        tags: ['Nuxt', 'UI'],
        stack: ['Nuxt', 'SCSS', 'UI'],
        features: ['Cartes KPI', 'Section filtres', 'Grille responsive'],
        links: {
          repo: 'https://github.com/aymanmechal',
          demo: '#'
        }
      },
      {
        id: 4,
        slug: 'mini-blog',
        title: 'Mini Blog',
        subtitle: 'Articles statiques',
        excerpt: 'Liste d’articles avec une page detail pour chaque post.',
        description:
          'Projet d’entrainement pour structurer des pages avec une navigation simple.',
        image: '/images/lion.png',
        tags: ['Nuxt', 'Content'],
        stack: ['Nuxt', 'Vue 3', 'CSS'],
        features: ['Liste d’articles', 'Page detail', 'Navigation simple'],
        links: {
          repo: 'https://github.com/aymanmechal',
          demo: '#'
        }
      }
    ]
  }),
  getters: {
    getById: (state) => (id) =>
      state.projects.find((project) => String(project.id) === String(id))
  }
})
