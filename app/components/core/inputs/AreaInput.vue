<template>
  <textarea
    :class="inputClass || 'input'"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    :value="modelValue"
    @input="onInput"
  />
  <p v-if="showError" :class="errorClass || 'input-error'">{{ errorMessage }}</p>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  name: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  rows: { type: [Number, String], default: 5 },
  errorMessage: { type: String, default: '' },
  showError: { type: Boolean, default: false },
  inputClass: { type: String, default: '' },
  errorClass: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.input {
  @apply w-full rounded-block border-2 border-navy/15 bg-surface px-4 py-3 font-sans text-base text-navy outline-none resize-y
         placeholder:text-muted transition-colors duration-200
         focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/40;
}

.input-error {
  @apply mt-1.5 text-sm font-semibold text-blue;
}
</style>
