<template>
  <footer id="contact" class="main-footer container">
    <div class="main-footer__block">
      <p class="main-footer__label">{{ t('footer.label') }}</p>

      <h2 class="main-footer__talk">{{ t('footer.talk') }}</h2>

      <p class="main-footer__pitch">{{ t('footer.pitch') }}</p>

      <ContactLinks />

      <p class="main-footer__copy">{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.main-footer {
  @apply pb-6 pt-24 md:pt-32;
}

.main-footer__block {
  @apply flex flex-col rounded-card bg-blue p-7 text-white md:p-14;
}

.main-footer__label {
  @apply font-sans text-sm font-semibold text-white;
}

.main-footer__talk {
  @apply mt-3 font-display font-extrabold text-white leading-[0.95] tracking-[-0.03em];
  font-size: clamp(3rem, 9vw, 8rem);
}

.main-footer__pitch {
  @apply mt-6 max-w-[40ch] font-sans text-lg md:text-xl leading-relaxed text-white;
}

.main-footer__copy {
  @apply mt-10 font-sans text-sm text-white;
}
</style>
