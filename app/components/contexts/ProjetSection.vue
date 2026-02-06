<template>
  <section class="projects" id="projects">
    <BaseTitle text="Projets" />



    <div class="projects-grid">
      <NuxtLink
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="project-link"
      >
        <BaseCard class="project-card">
          <div class="project-image">
            <NuxtImg :src="project.image" alt="" class="project-img" />
            <span class="project-chip">voir le projet</span>
          </div>

          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <BaseText :text="project.excerpt" class="project-excerpt" />
          </div>

          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">
              {{ tag }}
            </span>
          </div>
        </BaseCard>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectsStore } from '~/store/projects.store'

const projectStore = useProjectsStore()
const projects = computed(() => projectStore.projects)
const topTags = computed(() => ['HTML', 'CSS', 'Vue'])
</script>

<style lang="scss" scoped>
.projects {
  @apply mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 pb-12;
}

.projects-tags {
  @apply flex items-center gap-3;
}

.projects-tag {
  @apply rounded-full bg-blue-800 px-4 py-1.5 text-xs text-blue-100;
}

.projects-grid {
  @apply grid w-full grid-cols-1 gap-6 md:grid-cols-2;
}

.project-link {
  @apply block;
}

.project-card {
  @apply flex h-full flex-col gap-4 bg-[#101828];
}

.project-image {
  @apply relative overflow-hidden rounded-xl bg-blue-900/60;
}

.project-img {
  @apply h-40 w-full object-cover object-center;
}

.project-chip {
  @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/90 px-3 py-1 text-xs text-white;
}

.project-body {
  @apply flex flex-col gap-2;
}

.project-title {
  @apply text-center text-sm font-semibold text-blue-100;
}

.project-excerpt {
  @apply text-center text-xs text-blue-100/80;
}

.project-tags {
  @apply mt-auto flex flex-wrap items-center justify-center gap-2;
}

.project-tag {
  @apply rounded-full bg-blue-700 px-3 py-1 text-[11px] text-blue-50;
}
</style>
