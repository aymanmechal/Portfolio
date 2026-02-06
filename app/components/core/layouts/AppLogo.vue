<template>
  <NuxtLink to="/" :aria-label="t('common.aria.home')">
    <NuxtImg src="/images/lion.png" width="35" />
  </NuxtLink>
</template>

<script setup>
const { t } = useI18n()
</script>

<style lang="scss">
</style>