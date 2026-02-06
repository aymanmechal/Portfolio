<template>
  <div :class="['card', { 'card-round': rounded }]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  rounded: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.card {
  @apply rounded-xl bg-blue-50 ring-1 ring-blue-200 p-5;
}

.card-round {
  @apply rounded-full p-0;
}
</style>
