<template>
    <section class="parcours" id="parcours">
        <BaseTitle :text="t('parcours.title')" />

        <div class="timeline">
            <span class="timeline-line" aria-hidden="true"></span>

            <div class="timeline-items">
                <div
                    v-for="item in parcours"
                    :key="item.title"
                    class="timeline-item"
                >
                    <div class="timeline-date">{{ item.date }}</div>
                    <div class="timeline-dot">
                        <div class="timeline-dot-ring"></div>
                    </div>
                    <BaseCard class="timeline-card">
                        <BaseText :text="item.title" class="timeline-title" />
                        <BaseText
                            v-for="line in item.lines"
                            :key="line"
                            :text="line"
                            class="timeline-line-text"
                        />
                    </BaseCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()

const parcours = computed(() => [
    {
        date: t('parcours.items.0.date'),
        title: t('parcours.items.0.title'),
        lines: [
            t('parcours.items.0.lines.0'),
            t('parcours.items.0.lines.1'),
            t('parcours.items.0.lines.2')
        ]
    },
    {
        date: t('parcours.items.1.date'),
        title: t('parcours.items.1.title'),
        lines: [
            t('parcours.items.1.lines.0'),
            t('parcours.items.1.lines.1')
        ]
    },
    {
        date: t('parcours.items.2.date'),
        title: t('parcours.items.2.title'),
        lines: [
            t('parcours.items.2.lines.0'),
            t('parcours.items.2.lines.1'),
            t('parcours.items.2.lines.2')
        ]
    }
])
</script>

<style scoped>
.parcours {
    @apply mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 pb-16;
}

.timeline {
    @apply relative w-full max-w-3xl;
}

.timeline-line {
    @apply absolute top-0 h-full w-2 rounded-full;
    left: calc(56px + 24px);
    background: linear-gradient(180deg, #4e6cff 0%, rgba(255, 255, 255, 0.85) 100%);
}

.timeline-items {
    @apply flex flex-col gap-10;
}

.timeline-item {
    @apply relative grid items-start gap-4;
    grid-template-columns: 56px 48px 1fr;
}

.timeline-date {
    @apply mt-2 text-[11px] font-semibold text-blue-100/80 text-center;
}

.timeline-dot {
    @apply relative mt-1 flex h-10 w-10 items-center justify-center;
}

.timeline-dot-ring {
    @apply h-10 w-10 rounded-full border-[6px] border-blue-400 bg-white;
    box-shadow: 0 8px 20px rgba(16, 45, 110, 0.45);
}

.timeline-card {
    @apply bg-[#1a2a5a] shadow-xl shadow-blue-900/40;
}

.timeline-title {
    @apply text-sm font-semibold text-blue-100/90 mb-2;
}

.timeline-line-text {
    @apply text-xs text-blue-100/70;
}

@media (min-width: 640px) {
    .timeline-item {
        grid-template-columns: 70px 56px 1fr;
    }

    .timeline-line {
        left: calc(70px + 28px);
    }
}
</style>