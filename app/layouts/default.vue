<template>
  <div id="default-layout">
    <MainHeader />
    <slot />
    <MainFooter />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#default-layout {
  @apply min-h-screen text-slate-100;
  background:
    radial-gradient(1200px 600px at 50% -10%, rgba(78, 108, 255, 0.18), transparent 60%),
    radial-gradient(800px 500px at 85% 15%, rgba(255, 255, 255, 0.06), transparent 55%),
    linear-gradient(180deg, #0b1020 0%, #0b1120 35%, #0a0f1c 100%);
}
</style>
