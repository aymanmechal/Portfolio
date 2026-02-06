<template>
  <h2 class="title">{{ text }}</h2>
</template>

<script setup>
defineProps({
  text: { type: String, required: true, default: '' }
})
</script>

<style lang="scss" scoped>
.title {
  @apply text-center text-2xl font-black text-white;
}
</style>
