<template>
  <div class="project-page">
    <template v-if="project">
      <header class="project-hero" :class="[colorClass, textClass]">
        <div class="container project-hero-inner">
          <NuxtLink :to="localePath('/')" class="pill project-back">← {{ t('projects.back') }}</NuxtLink>
          <p class="project-meta">
            <span class="pill">{{ t(`projects.contexts.${project.context}`) }}</span>
            <span>{{ project.year }}</span>
          </p>
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-excerpt">{{ excerpt }}</p>
        </div>
      </header>

      <div class="container project-body">
        <div class="project-main">
          <h2 class="project-kicker">{{ t('projects.about') }}</h2>
          <p class="project-description">{{ description }}</p>
        </div>

        <div class="project-columns">
          <section class="project-col">
            <h2 class="project-kicker">{{ t('projects.stack') }}</h2>
            <ul class="project-pills">
              <li v-for="item in project.stack" :key="item" class="pill project-pill">{{ item }}</li>
            </ul>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ t(`projects.tags.${tag}`) }}</span>
            </div>
          </section>

          <section class="project-col">
            <h2 class="project-kicker">{{ t('projects.features') }}</h2>
            <ul class="project-list">
              <li v-for="item in features" :key="item" class="project-row">{{ item }}</li>
            </ul>
          </section>

          <section class="project-col">
            <h2 class="project-kicker">{{ t('projects.learned') }}</h2>
            <ol class="project-list">
              <li v-for="item in learned" :key="item" class="project-row">{{ item }}</li>
            </ol>
          </section>
        </div>

        <div class="project-actions">
          <a class="btn btn-primary" :href="project.links.repo" target="_blank" rel="noreferrer">
            {{ t('projects.viewCode') }}
          </a>
          <a
            v-if="project.links.demo"
            class="btn btn-secondary"
            :href="project.links.demo"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('projects.viewDemo') }}
          </a>
        </div>
      </div>

      <nav v-if="next" class="project-next-wrap" :aria-label="t('projects.next')">
        <NuxtLink :to="localePath(`/projects/${next.slug}`)" class="project-next" :class="[nextColorClass, nextTextClass]">
          <span class="container project-next-inner">
            <span class="pill project-next-label">{{ t('projects.next') }}</span>
            <span class="project-next-title">{{ next.title }}</span>
            <span class="project-next-arrow" aria-hidden="true">→</span>
          </span>
        </NuxtLink>
      </nav>
    </template>

    <section v-else class="project-empty container">
      <h1 class="h-section">{{ t('projects.notFound') }}</h1>
      <NuxtLink :to="localePath('/')" class="btn btn-primary">{{ t('projects.back') }}</NuxtLink>
    </section>

    <!-- Emplacement réservé au SEO (useProjectSeo) : ne pas supprimer -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectsStore, PROJECT_COLORS, TEXT_ON_COLOR } from '~/store/projects.store'

const route = useRoute()
const localePath = useLocalePath()
const { t, tm, rt } = useI18n()
const projectStore = useProjectsStore()

const project = computed(() => projectStore.getById(route.params.id))
const next = computed(() => (project.value ? projectStore.getNext(project.value.slug) : undefined))

const colorClass = computed(() => PROJECT_COLORS[project.value?.color] || PROJECT_COLORS.yellow)
const textClass = computed(() => TEXT_ON_COLOR[project.value?.textOnColor] || TEXT_ON_COLOR.navy)
const nextColorClass = computed(() => PROJECT_COLORS[next.value?.color] || PROJECT_COLORS.yellow)
const nextTextClass = computed(() => TEXT_ON_COLOR[next.value?.textOnColor] || TEXT_ON_COLOR.navy)

const itemKey = computed(() => `projects.items.${project.value?.slug}`)
const excerpt = computed(() => (project.value ? t(`${itemKey.value}.excerpt`) : ''))
const description = computed(() => (project.value ? t(`${itemKey.value}.description`) : ''))
const features = computed(() =>
  project.value ? tm(`${itemKey.value}.features`).map((item) => rt(item)) : []
)
const learned = computed(() =>
  project.value ? tm(`${itemKey.value}.learned`).map((item) => rt(item)) : []
)

// SEO : meta dynamique + JSON-LD SoftwareSourceCode
const siteUrl = useSiteUrl()

// Projet inconnu : vrai statut HTTP 404 côté serveur (noindex via useSiteSeo)
if (import.meta.server && !project.value) {
  setResponseStatus(useRequestEvent(), 404, 'Not Found')
}

useSiteSeo({
  title: () =>
    project.value
      ? t('seo.project.pageTitle', { title: project.value.title })
      : t('seo.project.notFoundTitle'),
  description: () => (project.value ? excerpt.value : t('seo.project.notFoundDescription')),
  noindex: !project.value,
  jsonLd: () =>
    project.value
      ? [
          softwareSourceCodeSchema(siteUrl, {
            name: project.value.title,
            description: excerpt.value,
            repo: project.value.links.repo,
            url: `${siteUrl}${localePath(`/projects/${project.value.slug}`)}`,
            keywords: project.value.tags
          })
        ]
      : []
})
</script>

<style lang="scss" scoped>
.project-page {
  @apply flex flex-col;
}

.project-hero {
  @apply pb-20 pt-10 md:pb-28 md:pt-14;
}

.project-hero-inner {
  @apply flex flex-col gap-6;
}

.project-back {
  @apply w-fit border-current px-4 py-2 text-sm font-semibold;
}

.project-meta {
  @apply flex flex-wrap items-center gap-3 font-sans text-sm font-semibold;

  .pill {
    @apply border-current px-4 py-1.5;
  }
}

.project-title {
  @apply font-display font-extrabold;
  font-size: clamp(3.5rem, 11vw, 11rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
}

.project-excerpt {
  @apply max-w-prose font-sans text-lg leading-relaxed md:text-xl;
}

.project-body {
  @apply flex flex-col gap-16 py-16 md:py-24;
}

.project-main {
  @apply flex max-w-prose flex-col gap-4;
}

.project-kicker {
  @apply font-sans text-sm font-semibold text-blue;
}

.project-description {
  @apply font-sans text-lg leading-relaxed text-navy md:text-xl;
}

.project-columns {
  @apply grid gap-12 md:grid-cols-3 md:gap-8;
}

.project-col {
  @apply flex flex-col gap-5;
}

.project-pills {
  @apply flex flex-wrap gap-2;
}

.project-pill {
  @apply bg-blush px-4 py-1.5 font-sans text-sm font-medium text-navy;
}

.project-tags {
  @apply flex flex-wrap gap-2;
}

.project-tag {
  @apply rounded-full border border-navy/20 px-3 py-1 font-sans text-sm text-muted;
}

.project-list {
  @apply flex flex-col;
}

.project-row {
  @apply flex gap-4 border-t border-navy/[0.12] py-3 font-sans text-base leading-relaxed text-navy;

  &:last-child {
    @apply border-b border-navy/[0.12];
  }
}

ol.project-list {
  counter-reset: item;
}

ol.project-list > .project-row {
  counter-increment: item;

  &::before {
    content: counter(item, decimal-leading-zero);
    @apply shrink-0 font-display font-bold text-blue;
  }
}

.project-actions {
  @apply flex flex-wrap gap-3;
}

.project-next-wrap {
  @apply mt-auto;
}

.project-next {
  @apply block py-14 transition-transform duration-300 md:py-20;

  &:hover,
  &:focus-visible {
    @apply outline-none;
  }

  &:hover .project-next-arrow,
  &:focus-visible .project-next-arrow {
    transform: translateX(8px);
  }

  &:focus-visible {
    @apply ring-4 ring-navy ring-inset;
  }
}

.project-next-inner {
  @apply flex flex-wrap items-center gap-4;
}

.project-next-label {
  @apply border-current px-4 py-1.5 text-sm font-semibold;
}

.project-next-title {
  @apply font-display font-extrabold;
  font-size: clamp(2.75rem, 10vw, 9rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.project-next-arrow {
  @apply ml-auto font-display text-5xl transition-transform duration-300 md:text-7xl;
}

.project-empty {
  @apply flex flex-col gap-6 py-24;
}

@media (prefers-reduced-motion: reduce) {
  .project-next,
  .project-next-arrow {
    transition: none;
  }

  .project-next:hover .project-next-arrow,
  .project-next:focus-visible .project-next-arrow {
    transform: none;
  }
}
</style>
