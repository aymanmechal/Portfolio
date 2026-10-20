<template>
    <section class="skills" id="skills">
        <div class="container skills-inner">
            <h2 class="h-section" v-reveal>
                <template v-if="titleParts.head">{{ titleParts.head }} </template>
                <span class="em-serif">{{ titleParts.em }}</span>
            </h2>

            <div class="skills-list">
                <SkillItem
                    v-for="(item, index) in items"
                    :key="item.number"
                    :number="item.number"
                    :tone="index"
                    :title="item.title"
                    :text="item.text"
                    :example-label="t('skills.example_label')"
                    :examples="item.examples"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const { t, tm } = useI18n()

// Coupe le titre : le dernier mot part en serif italique
const titleParts = computed(() => {
    const words = t('skills.title').trim().split(' ')
    const em = words.pop() || ''
    return { head: words.join(' '), em }
})

const items = computed(() =>
    Object.keys(tm('skills.items')).map((key, index) => ({
        number: String(index + 1).padStart(2, '0'),
        title: t(`skills.items.${key}.title`),
        text: t(`skills.items.${key}.text`),
        examples: t(`skills.items.${key}.examples`)
    }))
)
</script>

<style lang="scss" scoped>
.skills {
    @apply bg-blush py-20 md:py-28;
}

.skills-inner {
    @apply flex flex-col gap-12;
}

.skills-list {
    @apply flex flex-col;
}
</style>
