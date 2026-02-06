<template>
  <p class="text">{{ text }}</p>
</template>

<script setup>
defineProps({
  text: { type: String, required: true, default: '' }
})
</script>

<style lang="scss" scoped>
.text {
  @apply font-sans font-medium text-sm;
}
</style>
