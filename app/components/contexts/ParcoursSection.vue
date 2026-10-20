<template>
    <section class="parcours" id="parcours">
        <div class="container parcours-inner">
            <h2 class="h-section" v-reveal>
                <span class="em-serif">{{ t('parcours.title') }}</span>
            </h2>

            <ol class="parcours-list">
                <li
                    v-for="(item, index) in parcours"
                    :key="item.title"
                    class="parcours-item"
                    :class="dotClasses[index % dotClasses.length]"
                    v-reveal
                >
                    <p class="parcours-date">
                        <span class="parcours-dot" aria-hidden="true"></span>
                        {{ item.date }}
                    </p>
                    <div class="parcours-body">
                        <h3 class="parcours-name">{{ item.title }}</h3>
                        <ul class="parcours-lines">
                            <li v-for="line in item.lines" :key="line" class="parcours-line">
                                {{ line }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ol>

            <dl class="parcours-extras" v-reveal>
                <div class="parcours-extra">
                    <dt class="label">{{ t('parcours.extras.languages.label') }}</dt>
                    <dd class="parcours-extra-text">{{ t('parcours.extras.languages.text') }}</dd>
                </div>
                <div class="parcours-extra">
                    <dt class="label">{{ t('parcours.extras.interests.label') }}</dt>
                    <dd class="parcours-extra-text">{{ t('parcours.extras.interests.text') }}</dd>
                </div>
            </dl>
        </div>
    </section>
</template>

<script setup>
const { t, tm } = useI18n()

const dotClasses = ['parcours-item--blue', 'parcours-item--yellow']

const parcours = computed(() =>
    Object.keys(tm('parcours.items')).map((key) => ({
        date: t(`parcours.items.${key}.date`),
        title: t(`parcours.items.${key}.title`),
        lines: tm(`parcours.items.${key}.lines`).map((_, i) => t(`parcours.items.${key}.lines.${i}`))
    }))
)
</script>

<style lang="scss" scoped>
.parcours {
    @apply py-20 md:py-28;
}

.parcours-inner {
    @apply flex flex-col gap-12;
}

.parcours-list {
    @apply flex flex-col;
}

.parcours-item {
    @apply grid grid-cols-1 gap-3 border-t border-navy/10 py-10 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10;
}

.parcours-date {
    @apply flex items-center gap-3 pt-2 text-sm font-semibold text-muted;
}

.parcours-dot {
    @apply inline-block h-3.5 w-3.5 shrink-0 rounded-full;
}

.parcours-item--blue .parcours-dot {
    @apply bg-blue;
}

.parcours-item--yellow .parcours-dot {
    @apply bg-yellow;
}

.parcours-body {
    @apply flex flex-col gap-4;
}

.parcours-name {
    @apply font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-navy;
}

.parcours-lines {
    @apply flex flex-col gap-1.5;
}

.parcours-line {
    @apply max-w-[65ch] text-[1.0625rem] leading-relaxed text-navy md:text-lg;
}

.parcours-extras {
    @apply grid grid-cols-1 gap-6 border-t border-navy/10 pt-10 md:grid-cols-2;
}

.parcours-extra {
    @apply flex flex-col gap-2;
}

.parcours-extra-text {
    @apply max-w-[65ch] text-[1.0625rem] leading-relaxed text-navy md:text-lg;
}
</style>
