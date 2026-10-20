<template>
  <header class="main-header" @keydown.esc="closeMenu">
    <div class="container main-header__inner">
      <AppLogo />

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-controls="main-nav"
        @click="isOpen = !isOpen"
      >
        {{ isOpen ? t('header.close') : t('header.menu') }}
      </button>

      <nav id="main-nav" class="main-nav" :class="{ 'is-open': isOpen }" :aria-label="t('header.aria.nav')">
        <ul class="main-nav__list">
          <li v-for="item in navItems" :key="item.hash">
            <NuxtLink
              :to="{ path: localePath('/'), hash: item.hash }"
              class="pill main-nav__link"
              @click="closeMenu"
            >
              {{ t(item.key) }}
            </NuxtLink>
          </li>
        </ul>

        <div class="main-nav__tools">
          <a :href="asset(contact.cv)" download class="btn btn-primary main-nav__cv">
            {{ t('header.cv') }}
          </a>

          <ul class="main-nav__langs" :aria-label="t('header.aria.lang')">
            <li v-for="item in localeItems" :key="item.code">
              <NuxtLink
                :to="switchLocalePath(item.code)"
                :class="['pill main-nav__lang', { 'is-active': item.code === locale }]"
                :aria-current="item.code === locale ? 'true' : undefined"
                :hreflang="item.code"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { contact } from '~/data/contact'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const asset = usePublicAsset()

const isOpen = ref(false)
const closeMenu = () => {
  isOpen.value = false
}

const navItems = [
  { key: 'header.nav.projects', hash: '#projects' },
  { key: 'header.nav.skills', hash: '#skills' },
  { key: 'header.nav.parcours', hash: '#parcours' },
  { key: 'header.nav.contact', hash: '#contact' }
]

const localeItems = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' }
]
</script>

<style lang="scss" scoped>
.main-header {
  @apply sticky top-0 z-30 border-b border-navy/10 bg-surface/80 backdrop-blur-md;
}

.main-header__inner {
  @apply relative flex items-center justify-between gap-4 py-3.5;
}

.menu-toggle {
  @apply rounded-full border-2 border-navy px-4 py-2 font-sans text-sm font-semibold text-navy cursor-pointer transition-colors duration-200 hover:bg-navy hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2;
}

.main-nav {
  @apply hidden;
}

.main-nav.is-open {
  @apply absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-navy/10 bg-surface p-5 shadow-lg;
}

.main-nav__list,
.main-nav__langs {
  @apply m-0 flex list-none flex-wrap items-center gap-2 p-0;
}

.main-nav__tools {
  @apply flex flex-wrap items-center gap-3;
}

.main-nav__cv {
  @apply px-5 py-2.5 text-sm;
}

.main-nav__lang {
  @apply px-3 py-1.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-blush;
}

.main-nav__lang.is-active {
  @apply bg-navy text-white;
}

@media (min-width: 768px) {
  .menu-toggle {
    @apply hidden;
  }

  .main-nav,
  .main-nav.is-open {
    @apply static flex flex-row items-center gap-6 border-0 bg-transparent p-0 shadow-none;
  }
}
</style>
