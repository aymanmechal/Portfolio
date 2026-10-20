<template>
  <div id="default-layout" class="min-h-screen bg-bg text-navy">
    <a href="#main" class="skip-link">{{ t('common.skip') }}</a>
    <MainHeader />
    <main id="main">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.skip-link {
  @apply sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-blue focus:px-4 focus:py-2 focus:text-white;
}
</style>
