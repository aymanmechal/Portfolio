<template>
  <select
    :class="inputClass || 'input'"
    :name="name"
    :value="modelValue"
    @change="onChange"
  >
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <option
      v-for="option in options"
      :key="option.value ?? option"
      :value="option.value ?? option"
      :disabled="option.disabled"
    >
    </option>
  </select>
  <p v-if="showError" :class="errorClass || 'input-error'">{{ errorMessage }}</p>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  showError: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: '',
  },
  errorClass: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const onChange = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.input {
  @apply w-full border-0 rounded-[12px] py-3 px-[14px] bg-[#d7e4ff] text-[#1a2433] text-[14px] outline-none;
}

.input-error {
  @apply min-h-[16px] -mt-[6px] mx-1 mb-1 text-[12px] text-[#ff8a8a];
}
</style>