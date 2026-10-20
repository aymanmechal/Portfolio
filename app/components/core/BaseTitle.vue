<template>
  <component :is="as" class="h-section">
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup>
// Usage : <BaseTitle>Mes <span class="em-serif">projets</span></BaseTitle>
defineProps({
  text: { type: String, default: '' },
  as: { type: String, default: 'h2' }
})
</script>
