<template>
  <form class="contact-form" @submit.prevent="onSubmit" novalidate>
    <TextInput
      v-model="nomValue"
      name="nom"
      :placeholder="t('contact.form.placeholders.name')"
      :error-message="''"
      :show-error="false"
    />

    <TextInput
      v-model="emailValue"
      name="email"
      type="email"
      :placeholder="t('contact.form.placeholders.email')"
      :error-message="''"
      :show-error="false"
    />

    <TextInput
      v-model="objetValue"
      name="objet"
      :placeholder="t('contact.form.placeholders.subject')"
      :error-message="''"
      :show-error="false"
    />

    <AreaInput
      v-model="messageValue"
      name="message"
      :placeholder="t('contact.form.placeholders.message')"
      :error-message="''"
      :show-error="false"
    />

    <BaseButton
      class="contact-form-submit"
      type="submit"
      :text="t('contact.form.button')"
    />
  </form>
</template>

<script setup>
import { ref } from 'vue'

const { t } = useI18n()

const nomValue = ref('')
const emailValue = ref('')
const objetValue = ref('')
const messageValue = ref('')

const onSubmit = () => {
  console.log({
    nom: nomValue.value,
    email: emailValue.value,
    objet: objetValue.value,
    message: messageValue.value
  })
}
</script>

<style scoped>
.contact-form {
  @apply grid gap-2.5 max-w-[520px] p-4 rounded-[14px] bg-[#0f1627];
}

.contact-form-submit {
  @apply justify-self-center;
}
</style>
