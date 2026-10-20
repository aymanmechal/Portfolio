import { projects as projectsData, type Project } from '~/data/projects'

export {
  PROJECT_COLORS,
  TEXT_ON_COLOR,
  type Project,
  type ProjectColor,
  type ProjectLinks,
  type TextOnColor
} from '~/data/projects'

const matches = (project: Project, id: string | number) =>
  String(project.id) === String(id) || project.slug === String(id)

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: structuredClone(projectsData) as Project[]
  }),
  getters: {
    /** Accepte l'id numérique ou le slug. */
    getById: (state) => (id: string | number) => state.projects.find((p) => matches(p, id)),
    /** Projet suivant (boucle sur le premier). */
    getNext: (state) => (id: string | number) => {
      const index = state.projects.findIndex((p) => matches(p, id))
      if (index < 0 || state.projects.length < 2) return undefined
      return state.projects[(index + 1) % state.projects.length]
    }
  }
})
