<template>
    <button @click="onCustomClick">{{ text }}</button>
</template>

<script setup>
    const props = defineProps({
        text: { type: String, required: true, default: '' }
    })

    const emit = defineEmits(['customClick'])

    const onCustomClick = () => {
        // de la logique
        emit('customClick', true)
    }
</script>

<style lang="scss" scoped>
button {
  @apply relative px-4 py-2.5 rounded font-bold
         text-white bg-transparent
         ring-2 ring-cyan-500
         transition-all duration-300 overflow-hidden;
}

button::before {
  content: '';
  @apply absolute inset-0 -z-10 opacity-0
         bg-gradient-to-br from-cyan-500 to-blue-500
         transition-opacity duration-300;
}

button:hover {
  @apply text-white ring-blue-500;
}

button:hover::before {
  @apply opacity-100;
}
</style>
