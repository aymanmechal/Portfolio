<template>
  <div :class="['card', 'base-card', colorClass]">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  // Couleur d'aplat, parmi les tokens du design system.
  color: {
    type: String,
    default: 'yellow',
    validator: (value) => ['blue', 'green', 'yellow', 'orange', 'navy', 'blush', 'surface'].includes(value)
  }
})

// Classes écrites en littéral pour que Tailwind les génère.
// Règle : texte blanc sur blue/navy, texte navy sur les autres.
const colorMap = {
  blue: 'bg-blue text-white',
  navy: 'bg-navy text-white',
  green: 'bg-green text-navy',
  yellow: 'bg-yellow text-navy',
  orange: 'bg-orange text-navy',
  blush: 'bg-blush text-navy',
  surface: 'bg-surface text-navy'
}

const colorClass = computed(() => colorMap[props.color] || colorMap.yellow)
</script>

<style lang="scss" scoped>
.base-card {
  @apply h-full;
}

@media (hover: hover) {
  .base-card:hover {
    @apply -translate-y-1 shadow-[0_18px_40px_-18px_rgba(11,34,51,0.35)];
  }
}
</style>
