<template>
    <article class="skill" v-reveal>
        <span class="skill-number" :class="toneClass" aria-hidden="true">{{ number }}</span>
        <div class="skill-body">
            <h3 class="skill-title">{{ title }}</h3>
            <p class="skill-text">{{ text }}</p>
            <div class="skill-tags">
                <span class="skill-tags-label">{{ exampleLabel }}</span>
                <ul class="skill-tag-list">
                    <li v-for="tag in tags" :key="tag" class="skill-tag">{{ tag }}</li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    number: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    exampleLabel: { type: String, default: 'Ex. :' },
    examples: { type: String, required: true },
    // Index 0..3 : cycle des 4 couleurs de pastille
    tone: { type: Number, default: 0 }
})

const tones = ['skill-number--yellow', 'skill-number--green', 'skill-number--blue', 'skill-number--orange']
const toneClass = computed(() => tones[props.tone % tones.length])

const tags = computed(() =>
    props.examples.split(',').map((tag) => tag.trim()).filter(Boolean)
)
</script>

<style lang="scss" scoped>
.skill {
    @apply grid grid-cols-1 gap-5 border-t border-navy/10 py-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10;
}

.skill-number {
    @apply inline-flex h-16 w-16 items-center justify-center rounded-full font-display text-2xl font-bold tabular-nums text-navy md:h-20 md:w-20 md:text-3xl;
}

.skill-number--yellow {
    @apply bg-yellow;
}

.skill-number--green {
    @apply bg-green;
}

.skill-number--blue {
    @apply bg-blue text-white;
}

.skill-number--orange {
    @apply bg-orange;
}

.skill-body {
    @apply flex flex-col gap-4;
}

.skill-title {
    @apply font-display text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-navy;
}

.skill-text {
    @apply max-w-[65ch] text-[1.0625rem] leading-relaxed text-navy md:text-lg;
}

.skill-tags {
    @apply flex flex-col gap-2 pt-1 sm:flex-row sm:items-start sm:gap-3;
}

.skill-tags-label {
    @apply pt-1.5 text-sm font-semibold text-navy;
}

.skill-tag-list {
    @apply flex flex-wrap gap-2;
}

.skill-tag {
    @apply rounded-full bg-blush px-3 py-1.5 text-sm font-medium text-navy;
}
</style>
