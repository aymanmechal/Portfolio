<template>
    <section class="hero" id="top">
        <div class="hero-deco" aria-hidden="true">
            <span class="deco deco--sun"></span>
            <span class="deco deco--blob"></span>
            <span class="deco deco--square"></span>
            <span class="deco deco--arc"></span>
        </div>

        <div class="container hero-inner">
            <p class="hero-badge" v-reveal>
                <span class="hero-dot" aria-hidden="true"></span>
                {{ t('presentation.badge') }}
            </p>

            <h1 class="h-hero" v-reveal>
                <span class="block">AYMAN</span>
                <span class="block">MECHAL</span>
            </h1>

            <p class="hero-subtitle" v-reveal>{{ t('presentation.subtitle') }}</p>

            <p class="hero-band" v-reveal>{{ t('presentation.band') }}</p>
            <p class="hero-availability" v-reveal>{{ t('presentation.availability') }}</p>

            <div class="hero-actions" v-reveal>
                <NuxtLink :to="`${localePath('/')}#projects`" class="btn btn-primary">
                    {{ t('presentation.buttons.projects') }}
                </NuxtLink>
                <a :href="asset('/cv/CV_Ayman_Mechal.pdf')" download class="btn btn-secondary">
                    {{ t('presentation.buttons.cv') }}
                </a>
            </div>

            <ul class="hero-facts" v-reveal>
                <li
                    v-for="(key, index) in factKeys"
                    :key="key"
                    class="hero-fact"
                    :class="factVariants[index % factVariants.length]"
                >
                    {{ t(`presentation.facts.${key}`) }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const { t, tm } = useI18n()
const localePath = useLocalePath()
const asset = usePublicAsset()

const factKeys = computed(() => Object.keys(tm('presentation.facts')))
const factVariants = ['hero-fact--yellow', 'hero-fact--green', 'hero-fact--sky', 'hero-fact--surface']
</script>

<style lang="scss" scoped>
.hero {
    @apply relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20;
}

.hero-deco {
    @apply pointer-events-none absolute inset-0;
}

.deco {
    @apply absolute block;
}

.deco--sun {
    @apply right-[-2rem] top-[-1rem] h-28 w-28 rounded-full bg-yellow md:right-[6%] md:top-16 md:h-44 md:w-44;
}

.deco--blob {
    @apply right-6 top-40 h-20 w-20 bg-sky md:right-[22%] md:top-[18rem] md:h-40 md:w-40;
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
}

.deco--square {
    @apply bottom-10 right-8 h-14 w-14 rotate-12 rounded-[12px] bg-orange md:bottom-24 md:right-[34%] md:h-24 md:w-24;
}

.deco--arc {
    @apply left-[-1.5rem] bottom-[-1rem] h-12 w-24 rounded-t-full bg-green md:left-auto md:right-[3%] md:h-20 md:w-40;
}

.hero-inner {
    @apply relative flex flex-col gap-6;
}

.hero-badge {
    @apply inline-flex w-fit items-center gap-2 rounded-full bg-green px-4 py-2 text-sm font-semibold text-navy;
}

.hero-dot {
    @apply inline-block h-2.5 w-2.5 rounded-full bg-navy;
}

.hero-subtitle {
    @apply max-w-[38rem] font-display text-2xl font-semibold leading-tight text-navy md:text-4xl;
}

.hero-band {
    @apply font-semibold text-navy;
}

.hero-availability {
    @apply max-w-[65ch] text-[1.0625rem] leading-relaxed text-muted;
}

.hero-actions {
    @apply flex flex-wrap gap-3 pt-2;
}

.hero-facts {
    @apply mt-4 flex flex-wrap gap-2 md:gap-3;
}

.hero-fact {
    @apply rounded-full px-4 py-2 text-sm font-semibold text-navy;
}

.hero-fact--yellow {
    @apply bg-yellow;
}

.hero-fact--green {
    @apply bg-green;
}

.hero-fact--sky {
    @apply bg-sky;
}

.hero-fact--surface {
    @apply bg-surface ring-1 ring-inset ring-navy/10;
}

</style>
