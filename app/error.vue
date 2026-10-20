<template>
  <div class="error-page">
    <main class="container error-page__inner">
      <p class="label">{{ t('common.error') }}{{ error?.statusCode ? ` ${error.statusCode}` : '' }}</p>
      <h1 class="h-hero error-page__title">{{ t('common.oops') }}</h1>
      <p class="error-page__text">{{ t('common.error_text') }}</p>
      <div class="error-page__action">
        <BaseButton :text="t('common.back_home')" @custom-click="handleBack" />
      </div>
    </main>
  </div>
</template>

<script setup>
const props = defineProps({
  error: { type: Object, default: null }
})

const { t } = useI18n()

const handleBack = () => {
  clearError({ redirect: '/' })
}
</script>

<style lang="scss" scoped>
.error-page {
  @apply flex min-h-screen bg-bg text-navy;
}

.error-page__inner {
  @apply flex flex-col justify-center py-24;
}

.error-page__title {
  @apply mt-4;
  font-size: clamp(3rem, 9vw, 7rem);
}

.error-page__text {
  @apply mt-6 font-sans text-lg text-navy md:text-xl;
}

.error-page__action {
  @apply mt-10;
}
</style>
