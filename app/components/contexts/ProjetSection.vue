<template>
  <section id="projects" class="work container">
    <header class="work-head">
      <p class="work-label">{{ t('projects.label') }}</p>
      <h2 class="h-section work-title">
        {{ t('projects.titleLead') }} <span class="em-serif">{{ t('projects.titleAccent') }}</span>
      </h2>
      <p class="work-subtitle">{{ t('projects.subtitle') }}</p>
    </header>

    <ul class="work-grid">
      <li
        v-for="(project, index) in projectStore.projects"
        :key="project.id"
        v-reveal="index * 120"
        class="work-item"
      >
        <NuxtLink
          :to="localePath(`/projects/${project.slug}`)"
          class="work-card"
          :class="[colorClass(project), textClass(project)]"
        >
          <span class="pill work-context">{{ t(`projects.contexts.${project.context}`) }}</span>
          <span class="work-name">{{ project.title }}</span>
          <span class="work-excerpt">{{ t(`projects.items.${project.slug}.excerpt`) }}</span>
          <span class="work-tags">
            <span v-for="tag in project.stack.slice(0, 4)" :key="tag" class="work-tag">{{ tag }}</span>
          </span>
          <span class="work-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
          <span class="sr-only">{{ t('projects.view') }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useProjectsStore, PROJECT_COLORS, TEXT_ON_COLOR } from '~/store/projects.store'

const { t } = useI18n()
const localePath = useLocalePath()
const projectStore = useProjectsStore()

const colorClass = (project) => PROJECT_COLORS[project.color] || PROJECT_COLORS.yellow
const textClass = (project) => TEXT_ON_COLOR[project.textOnColor] || TEXT_ON_COLOR.navy
</script>

<style lang="scss" scoped>
.work {
  @apply flex flex-col gap-12 py-24;
}

.work-head {
  @apply flex flex-col gap-4;
}

.work-label {
  @apply inline-flex w-fit items-center gap-2 font-sans text-sm font-semibold text-blue;

  &::before {
    content: '';
    @apply h-2.5 w-2.5 rounded-full bg-green;
  }
}

.work-title {
  @apply font-display font-extrabold text-navy;
  font-size: clamp(2.25rem, 5vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.02em;
}

.work-subtitle {
  @apply max-w-prose font-sans text-lg leading-relaxed text-muted;
}

.work-grid {
  @apply grid gap-6 md:grid-cols-2;
}

.work-item {
  @apply flex;
}

.work-card {
  @apply relative flex w-full flex-col gap-5 rounded-[24px] p-7 md:p-9;
  min-height: 22rem;
  transition:
    transform 300ms ease,
    box-shadow 300ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    box-shadow: 0 18px 36px -18px rgb(11 34 51 / 0.35);
  }

  &:focus-visible {
    @apply outline-none ring-4 ring-navy ring-offset-4 ring-offset-bg;
  }
}

.work-context {
  @apply w-fit border-current bg-transparent px-4 py-1.5 text-sm font-semibold;
}

.work-name {
  @apply mt-auto font-display font-extrabold;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.work-excerpt {
  @apply max-w-prose font-sans text-base leading-relaxed;
}

.work-tags {
  @apply flex flex-wrap gap-2;
}

.work-tag {
  @apply rounded-full border border-current px-3 py-1 font-sans text-sm font-medium;
}

.work-arrow {
  @apply absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-current transition-transform duration-300 md:right-9 md:top-9;
}

.work-card:hover .work-arrow,
.work-card:focus-visible .work-arrow {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .work-card,
  .work-arrow {
    transition: none;
  }

  .work-card:hover,
  .work-card:focus-visible {
    transform: none;
  }
}
</style>
