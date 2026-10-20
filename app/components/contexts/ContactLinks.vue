<template>
  <div class="contact-links">
    <ul class="contact-links__list">
      <li class="contact-links__item">
        <span class="contact-links__key">{{ t('footer.labels.email') }}</span>
        <a :href="`mailto:${contact.email}`" class="pill contact-links__value">{{ contact.email }}</a>
      </li>
      <li class="contact-links__item">
        <span class="contact-links__key">{{ t('footer.labels.phone') }}</span>
        <a :href="contact.phoneHref" class="pill contact-links__value">{{ contact.phone }}</a>
      </li>
      <li class="contact-links__item">
        <span class="contact-links__key">{{ t('footer.labels.linkedin') }}</span>
        <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer" class="pill contact-links__value">
          {{ contact.linkedinLabel }}
        </a>
      </li>
      <li class="contact-links__item">
        <span class="contact-links__key">{{ t('footer.labels.github') }}</span>
        <a :href="contact.github" target="_blank" rel="noopener noreferrer" class="pill contact-links__value">
          {{ contact.githubLabel }}
        </a>
      </li>
    </ul>

    <a :href="asset(contact.cv)" download class="btn contact-links__cv">
      {{ t('footer.download_cv') }}
    </a>
  </div>
</template>

<script setup>
import { contact } from '~/data/contact'

const { t } = useI18n()
const asset = usePublicAsset()
</script>

<style lang="scss" scoped>
.contact-links {
  @apply mt-10 flex flex-col gap-8;
}

.contact-links__list {
  @apply m-0 flex list-none flex-col gap-5 p-0 md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-6;
}

.contact-links__item {
  @apply flex flex-col items-start gap-2;
}

.contact-links__key {
  @apply font-sans text-sm font-semibold text-white;
}

.contact-links__value {
  @apply break-all border-transparent bg-white px-5 py-2.5 text-base font-semibold text-navy no-underline transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue;
}

.contact-links__cv {
  @apply self-start bg-navy text-white hover:bg-white hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue;
}
</style>
