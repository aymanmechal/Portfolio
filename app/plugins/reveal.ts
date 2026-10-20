import type { Directive } from 'vue'

// Directive v-reveal : fade + translateY(24px) à l'entrée dans le viewport.
// Usage : v-reveal ou v-reveal="delayMs" (délai en millisecondes, ex. index * 120).
// Le SSR ne rend rien de caché : l'état masqué n'est appliqué qu'après hydratation,
// et jamais si prefers-reduced-motion est actif.
const revealDirective: Directive<HTMLElement, number | undefined> = {
  getSSRProps() {
    return {}
  },

  mounted(el, binding) {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    el.classList.add('reveal')
    el.style.setProperty('--reveal-delay', `${Number(binding.value) || 0}ms`)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver = observer
  },

  unmounted(el) {
    const observer = (el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver
    observer?.disconnect()
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', revealDirective)
})
