<template>
    <div class="home">
        <PresentationSection />

        <div class="marquee marquee-band" aria-hidden="true">
            <div class="marquee-track">
                <template v-for="n in 2" :key="n">
                    <span v-for="(item, index) in marqueeItems" :key="`${n}-${index}`" class="marquee-item">
                        <span>{{ item }}</span>
                        <span class="marquee-sep" :class="sepClasses[index % sepClasses.length]"></span>
                    </span>
                </template>
            </div>
        </div>

        <AboutSection />
        <SkillsSection />
        <ProjetSection />
        <ParcoursSection />
    </div>
</template>

<script setup>
const { t } = useI18n()

// Le texte du marquee est découpé sur les puces « • » pour afficher des pastilles colorées
const marqueeItems = computed(() =>
    t('common.marquee').split('•').map((s) => s.trim()).filter(Boolean)
)
const sepClasses = ['marquee-sep--yellow', 'marquee-sep--green', 'marquee-sep--orange', 'marquee-sep--sky']

// SEO : meta, hreflang/canonical et JSON-LD Person
const siteUrl = useSiteUrl()
useSiteSeo({
  title: () => t('seo.home.title'),
  description: () => t('seo.home.description'),
  jsonLd: () => [personSchema(siteUrl, t('seo.jobTitle'))]
})
</script>

<style lang="scss" scoped>
.home {
    @apply flex flex-col;
}

.marquee-band {
    @apply bg-navy py-5 text-bg;
}

.marquee-track {
    @apply font-display gap-0 pr-0 text-lg font-semibold md:text-xl;
}

.marquee-item {
    @apply inline-flex items-center gap-8 pr-8;
}

.marquee-sep {
    @apply inline-block h-3 w-3 shrink-0 rounded-full;
}

.marquee-sep--yellow {
    @apply bg-yellow;
}

.marquee-sep--green {
    @apply bg-green;
}

.marquee-sep--orange {
    @apply bg-orange;
}

.marquee-sep--sky {
    @apply bg-sky;
}
</style>
