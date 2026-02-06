<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <AppLogo />
      </div>
      <NewsletterForm />
    </div>
  </footer>
</template>

<script setup>
import NewsletterForm from '~/components/contexts/NewsletterForm.vue'
</script>

<style lang="scss" scoped>
.main-footer {
  @apply mt-16 px-6 py-10 md:px-10;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(9, 14, 26, 0.7) 0%, rgba(9, 14, 26, 0.95) 100%);
}

.footer-content {
  @apply flex flex-col gap-8 md:flex-row md:items-center md:justify-between;
}

.footer-brand {
  @apply flex flex-col gap-2;
}
</style>
