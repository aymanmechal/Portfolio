<template>
  <header class="main-header">
    <div class="logo">
      <AppLogo />
    </div>
    <nav>
      <MainHeaderNavBar :links="links" @item-click="onNavItemClick" />
    </nav>
    <div v-if="isLoginOpen" class="login-panel">
      <form class="login-form" @submit.prevent="onSubmit">
        <p class="login-title">Connexion</p>
        <input
          v-model="email"
          class="login-input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          v-model="password"
          class="login-input"
          type="password"
          name="password"
          placeholder="Mot de passe"
          required
        />
        <button class="login-button" type="submit">Login</button>
        <NuxtLink class="login-register" to="/register">register</NuxtLink>
      </form>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const links = [
  { name: 'dark', src: 'images/dark.png' },
  { name: 'lang', src: 'images/lang.png' },
  { name: 'burger', src: 'images/burger.png' } 
]

const isLoginOpen = ref(false)
const email = ref('')
const password = ref('')

const onNavItemClick = (link) => {
  if (link?.name === 'burger') {
    isLoginOpen.value = !isLoginOpen.value
  }
}

const onSubmit = () => {
  console.log('login:', { email: email.value, password: password.value })
  email.value = ''
  password.value = ''
  isLoginOpen.value = false
}
</script>

<style lang="scss" scoped>
.main-header {
  @apply relative flex items-center justify-between px-6 py-5 md:px-10;
}

.logo {
  @apply flex items-center;
}

.login-panel {
  @apply absolute right-6 top-[72px] z-20 w-[280px] rounded-[14px] p-4;
  background: rgba(12, 18, 34, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.login-form {
  @apply flex flex-col gap-3;
}

.login-title {
  @apply text-sm text-slate-200 font-semibold;
}

.login-input {
  @apply w-full border-0 rounded-[10px] py-2.5 px-3 bg-[#d7e4ff] text-[#1a2433] text-[13px] outline-none;
}

.login-button {
  @apply border-0 rounded-[10px] py-2.5 bg-[#2f4edc] text-white font-semibold cursor-pointer;
}

.login-button:hover {
  @apply bg-[#2944c2];
}

.login-register {
  @apply text-xs text-slate-400 underline self-center;
}
</style>
