<template>
  <h1 class="h-hero">
    <slot>{{ text }}</slot>
  </h1>
</template>

<script setup>
defineProps({
  text: { type: String, default: '' }
})
</script>
