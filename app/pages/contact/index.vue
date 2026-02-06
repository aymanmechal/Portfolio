<template>
  <div class="contact-page">
    <BaseName :text="title" />
    <ContactForm />
  </div>
</template>

<script setup>
const title = 'Contact'
const description = 'Tu peux me contacter via les moyens suivants :'
const email = 'Email : ayman.mechal@icloud.com'
const github = 'GitHub : github.com/aymanmechal'
const linkedin = 'LinkedIn : linkedin.com/in/ayman-mechal/'
</script>

<style lang="scss" scoped>
.contact-page {
  @apply mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 pb-16;
}
</style>
