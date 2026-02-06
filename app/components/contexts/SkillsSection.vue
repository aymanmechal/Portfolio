<template>
    <section class="skills" id="skills">
        <BaseTitle :text="t('skills.title')" />

        <BaseText :text="t('skills.tools_title')" class="skills-subtitle" />

        <BaseCard class="skills-card">
            <div class="skills-grid">
                <SkillItem
                    v-for="skill in skills"
                    :key="skill.label"
                    :label="skill.label"
                    :icon="skill.icon"
                    :color="skill.color"
                />
            </div>
        </BaseCard>

        <BaseText :text="t('skills.dev_title')" class="skills-subtitle" />

        <BaseCard class="skills-card">
            <div class="skills-grid">
                <SkillItem
                    v-for="skill in devSkills"
                    :key="skill.label"
                    :label="skill.label"
                    :icon="skill.icon"
                    :color="skill.color"
                />
            </div>
        </BaseCard>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()

const skills = computed(() => [
    { label: t('skills.tools.vscode'), icon: 'simple-icons:visualstudiocode', color: '#007ACC' },
    { label: t('skills.tools.git'), icon: 'simple-icons:git', color: '#F05032' },
    { label: t('skills.tools.canva'), icon: 'simple-icons:canva', color: '#00C4CC' },
    { label: t('skills.tools.figma'), icon: 'simple-icons:figma', color: '#F24E1E' },
    { label: t('skills.tools.photoshop'), icon: 'simple-icons:adobephotoshop', color: '#31A8FF' }
])

const devSkills = computed(() => [
    { label: t('skills.dev.python'), icon: 'simple-icons:python', color: '#3776AB' },
    { label: t('skills.dev.java'), icon: 'simple-icons:java', color: '#E76F00' },
    { label: t('skills.dev.html'), icon: 'simple-icons:html5', color: '#E34F26' },
    { label: t('skills.dev.css'), icon: 'simple-icons:css3', color: '#1572B6' },
    { label: t('skills.dev.javascript'), icon: 'simple-icons:javascript', color: '#F7DF1E' }
])
</script>

<style scoped>
.skills {
    @apply mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 pb-16;
}

.skills-subtitle {
    @apply text-center text-sm font-semibold tracking-[0.25em] text-blue-100/70;
}

.skills-card {
    @apply w-full max-w-3xl bg-[#1a2a5a] shadow-xl shadow-blue-900/50;
}

.skills-grid {
    @apply grid grid-cols-2 gap-6 py-4 sm:grid-cols-3;
}
</style>
