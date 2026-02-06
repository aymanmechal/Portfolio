<template>
  <section class="project-detail">
    <BaseTitle :text="project?.title || 'Projet'" />

    <div v-if="project" class="detail-card">
      <div class="detail-image">
        <NuxtImg :src="project.image" alt="" class="detail-img" />
      </div>

      <div class="detail-content">
        <h3 class="detail-subtitle">{{ project.subtitle }}</h3>
        <BaseText :text="project.description" />

        <div class="detail-tags">
          <span v-for="tag in project.tags" :key="tag" class="detail-tag">
            {{ tag }}
          </span>
        </div>

        <div class="detail-block">
          <p class="detail-title">Technos</p>
          <ul class="detail-list">
            <li v-for="item in project.stack" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="detail-block">
          <p class="detail-title">Fonctionnalites</p>
          <ul class="detail-list">
            <li v-for="item in project.features" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="detail-actions">
          <a class="detail-link" :href="project.links.repo" target="_blank" rel="noreferrer">
            Voir le code
          </a>
          <a class="detail-link" :href="project.links.demo" target="_blank" rel="noreferrer">
            Voir la demo
          </a>
        </div>
      </div>
    </div>

    <div v-else class="detail-empty">
      <BaseText text="Projet introuvable." />
      <NuxtLink to="/" class="detail-back">Retour a l'accueil</NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectsStore } from '~/store/projects.store'

const route = useRoute()
const projectStore = useProjectsStore()

const project = computed(() => projectStore.getById(route.params.id))
</script>

<style lang="scss" scoped>
.project-detail {
  @apply mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10;
}

.detail-card {
  @apply grid gap-6 rounded-2xl bg-[#101828] p-6 md:grid-cols-[280px_1fr];
}

.detail-image {
  @apply overflow-hidden rounded-xl bg-blue-900/60;
}

.detail-img {
  @apply h-56 w-full object-cover object-center;
}

.detail-content {
  @apply flex flex-col gap-4;
}

.detail-subtitle {
  @apply text-sm text-blue-200;
}

.detail-tags {
  @apply flex flex-wrap gap-2;
}

.detail-tag {
  @apply rounded-full bg-blue-700 px-3 py-1 text-[11px] text-blue-50;
}

.detail-block {
  @apply flex flex-col gap-2;
}

.detail-title {
  @apply text-xs uppercase tracking-wide text-blue-200;
}

.detail-list {
  @apply list-disc pl-5 text-sm text-blue-100/90;
}

.detail-actions {
  @apply mt-2 flex flex-wrap gap-3;
}

.detail-link {
  @apply rounded-full border border-blue-600 px-4 py-2 text-xs text-blue-100 hover:bg-blue-600 hover:text-white;
}

.detail-empty {
  @apply flex flex-col gap-3;
}

.detail-back {
  @apply text-sm text-blue-200 underline;
}
</style>
