<template>
  <ul class="nav-list">
    <MainHeaderNavBarItem
      v-for="(link, index) in links"
      :key="`main-link-${index}`"
      :link="link"
      @click="onItemClick"
    />
  </ul>
</template>

<script setup>
const props = defineProps({
  links: { type: Array, required: true, default: () => [] }
})

const emit = defineEmits(['item-click'])

const onItemClick = (link) => {
  emit('item-click', link)
}
</script>

<style lang="scss" scoped>
.nav-list {
  @apply flex items-center gap-3 list-none;
}
</style>
