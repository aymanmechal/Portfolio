<template>
  <p class="base-text">
    <slot>{{ text }}</slot>
  </p>
</template>

<script setup>
defineProps({
  text: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.base-text {
  @apply max-w-[65ch] font-sans text-[1.0625rem] md:text-lg leading-relaxed text-navy;
}
</style>
