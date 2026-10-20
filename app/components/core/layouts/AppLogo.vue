<template>
  <NuxtLink :to="localePath('/')" class="app-logo" :aria-label="t('common.aria.home')">
    <span class="app-logo__dot" aria-hidden="true" />
    Ayman Mechal
  </NuxtLink>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.app-logo {
  @apply inline-flex items-center gap-2.5 whitespace-nowrap font-display font-bold text-lg md:text-xl tracking-[-0.02em] text-navy no-underline rounded-full;
}

.app-logo__dot {
  @apply inline-block h-3 w-3 rounded-full bg-green;
}
</style>
