<template>
  <h1>{{ text }}</h1>
</template>

<script setup>
defineProps({
  text: { type: String, required: true, default: '' }
})
</script>

<style lang="scss" scoped>
h1 {
  @apply font-sans font-black text-9xl;
}
</style>
