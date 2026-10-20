<template>
    <section class="about" id="about">
        <div class="container about-inner">
            <h2 class="h-section" v-reveal>
                <template v-if="titleParts.head">{{ titleParts.head }} </template>
                <span class="em-serif">{{ titleParts.em }}</span>
            </h2>

            <div class="about-grid">
                <p class="about-profile" v-reveal>{{ t('about.profile') }}</p>

                <div class="about-cards">
                    <article
                        v-for="card in cards"
                        :key="card.word"
                        class="about-card"
                        :class="card.variant"
                        v-reveal
                    >
                        <h3 class="about-card-word">{{ card.word }}</h3>
                        <p class="about-card-text">{{ card.text }}</p>
                    </article>
                </div>
            </div>

            <div class="about-bottom" v-reveal>
                <p class="about-facts">{{ t('about.facts') }}</p>
                <button type="button" class="btn btn-primary" @click="onContactClick">
                    {{ t('about.buttons.contact') }}
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

// Coupe le titre : le dernier mot part en serif italique
const titleParts = computed(() => {
    const words = t('about.title').trim().split(' ')
    const em = words.pop() || ''
    return { head: words.join(' '), em }
})

const cards = computed(() => [
    { word: t('about.cards.0.word'), text: t('about.cards.0.text'), variant: 'about-card--yellow' },
    { word: t('about.cards.1.word'), text: t('about.cards.1.text'), variant: 'about-card--green' }
])

const onContactClick = () => {
    navigateTo(localePath('/contact'))
}
</script>

<style lang="scss" scoped>
.about {
    @apply py-20 md:py-28;
}

.about-inner {
    @apply flex flex-col gap-12;
}

.about-grid {
    @apply grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start md:gap-14;
}

.about-profile {
    @apply max-w-[65ch] text-[1.0625rem] leading-relaxed text-navy md:text-lg;
}

.about-cards {
    @apply grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1;
}

.about-card {
    @apply flex flex-col gap-4 rounded-[24px] p-6 md:p-8;
}

.about-card--yellow {
    @apply bg-yellow text-navy;
}

.about-card--green {
    @apply bg-green text-navy;
}

.about-card-word {
    @apply font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.04em];
}

.about-card-text {
    @apply max-w-[30ch] text-[1.0625rem] leading-relaxed md:text-lg;
}

.about-bottom {
    @apply flex flex-col gap-6 border-t border-navy/10 pt-8 md:flex-row md:items-center md:justify-between;
}

.about-facts {
    @apply max-w-[55ch] text-[1.0625rem] font-medium text-muted md:text-lg;
}

</style>
