<template>
  <button
    :type="type"
    :class="['btn', variant === 'secondary' ? 'btn-secondary' : 'btn-primary']"
    @click="onCustomClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: '' },
  // primary : pilule bleue, texte blanc. secondary : pilule à bordure navy.
  variant: { type: String, default: 'primary', validator: (v) => ['primary', 'secondary'].includes(v) },
  type: { type: String, default: 'button' }
})

const emit = defineEmits(['customClick'])

const onCustomClick = () => {
  emit('customClick', true)
}
</script>
