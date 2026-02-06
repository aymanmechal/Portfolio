<template>
    <div class="skill-item">
        <div class="skill-icon" aria-hidden="true">
            <Icon :name="icon" class="skill-icon-svg" :style="{ color }" />
        </div>
        <BaseText :text="label" class="skill-label" />
    </div>
</template>

<script setup>
defineProps({
    label: { type: String, required: true },
    icon: { type: String, required: true },
    color: { type: String, default: 'currentColor' }
})
</script>

<style scoped>
.skill-item {
    @apply flex flex-col items-center gap-2;
}

.skill-icon {
    @apply flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-md shadow-blue-900/30;
}

.skill-icon-svg {
    @apply h-7 w-7;
}

.skill-label {
    @apply text-xs font-semibold text-blue-100/90;
}
</style>
