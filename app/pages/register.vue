<template>
  <section class="register-page">
    <div class="register-card">
      <h1 class="register-title">Register</h1>
      <p class="register-subtitle">Cree ton compte en quelques secondes.</p>

      <form class="register-form" @submit.prevent="onSubmit">
        <input v-model="name" class="register-input" type="text" placeholder="Nom" required />
        <input v-model="email" class="register-input" type="email" placeholder="Email" required />
        <input v-model="password" class="register-input" type="password" placeholder="Mot de passe" required />
        <button class="register-button" type="submit">S'inscrire</button>
      </form>

      <NuxtLink class="register-back" to="/">Retour a l'accueil</NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue' 

const name = ref('')
const email = ref('')
const password = ref('')

const onSubmit = () => {
  console.log('register:', {
    name: name.value,
    email: email.value,
    password: password.value,
  })
}
</script>

<style lang="scss" scoped>
.register-page {
  @apply flex items-center justify-center px-6 py-16;
}

.register-card {
  @apply w-full max-w-[460px] rounded-[16px] p-6 md:p-8;
}

.register-title {
  @apply text-2xl font-semibold text-slate-100;
}

.register-subtitle {
  @apply mt-1 text-sm text-slate-300;
}

.register-form {
  @apply mt-6 flex flex-col gap-3;
}

.register-input {
  @apply w-full border-0 rounded-[12px] py-3 px-[14px] bg-[#d7e4ff] text-[#1a2433] text-[14px] outline-none;
}

.register-button {
  @apply mt-2 border-0 rounded-[12px] py-3 bg-[#2f4edc] text-white font-semibold cursor-pointer;
}

.register-button:hover {
  @apply bg-[#2944c2];
}

.register-back {
  @apply mt-4 block text-center text-xs text-slate-400 underline;
}
</style>