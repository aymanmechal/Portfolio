<template>
  <div class="contact-page container">
    <p class="contact-page__eyebrow">{{ t('footer.label') }}</p>
    <h1 class="h-hero contact-page__title">
      {{ t('contact.title') }}
    </h1>
    <p class="contact-page__intro">{{ t('contact.intro') }}</p>
    <ContactLinks />
  </div>
</template>

<script setup>
const { t } = useI18n()

// SEO : meta, hreflang/canonical
useSiteSeo({
  title: () => t('seo.contact.title'),
  description: () => t('seo.contact.description')
})
</script>

<style lang="scss" scoped>
.contact-page {
  @apply flex flex-col pb-16 pt-16 md:pt-24;
}

.contact-page__eyebrow {
  @apply font-sans text-sm font-semibold text-muted;
}

.contact-page__title {
  @apply mt-4;
  font-size: clamp(2.75rem, 8vw, 7rem);
}

.contact-page__intro {
  @apply mt-6 max-w-[55ch] font-sans text-lg leading-relaxed text-navy md:text-xl;
}
</style>
