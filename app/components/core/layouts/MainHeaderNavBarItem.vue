<template>
  <li :class="['nav-item', `nav-item--${link.name}`]">
    <button
      v-if="link.name === 'burger'"
      type="button"
      class="nav-button"
      @click="onClick"
    >
      <NuxtImg class="nav-icon" :src="link.src" width="32" />
    </button>
    <div v-else-if="link.name === 'lang'" class="lang-dropdown">
      <button type="button" class="nav-button" @click="toggleLang">
        <NuxtImg class="nav-icon" :src="link.src" width="32" />
      </button>
      <div v-if="isLangOpen" class="lang-menu">
        <button
          v-for="locale in localeOptions"
          :key="locale.code"
          type="button"
          class="lang-option"
          @click="onLocaleSelect(locale.code)"
        >
          {{ locale.label }}
        </button>
      </div>
    </div>
    <NuxtLink v-else class="nav-link">
      <NuxtImg class="nav-icon" :src="link.src" width="32" />
    </NuxtLink>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  link: { type: Object, required: true, default: () => null }
})

const emit = defineEmits(['click'])
const { setLocale, locale } = useI18n()

const isLangOpen = ref(false)
const localeOptions = [
  { code: 'fr', label: 'Francais' },
  { code: 'en', label: 'English' }
]

const onClick = () => {
  emit('click', props.link)
}

const toggleLang = () => {
  isLangOpen.value = !isLangOpen.value
}

const onLocaleSelect = (code) => {
  if (locale.value !== code) {
    setLocale(code)
  }
  isLangOpen.value = false
}
</script>

<style lang="scss" scoped>
.nav-button {
  @apply border-0 bg-transparent p-0 cursor-pointer;
}

.lang-dropdown {
  @apply relative;
}

.lang-menu {
  @apply absolute right-0 mt-2 flex flex-col gap-2 rounded-[12px] p-2;
}

.lang-option {
  @apply border-0 rounded-[10px] px-3 py-2 text-left text-sm text-slate-200 cursor-pointer;

}

.lang-option:hover {
  @apply text-white;
}
</style>
