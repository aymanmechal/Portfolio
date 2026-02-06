<template>
    <div class="home">
        <PresentationSection />
        <AboutSection />
        <SkillsSection />
        <ProjetSection />
        <ParcoursSection />
        <!-- tests i18n 
        {{ $t('test') }}
        {{ $t('button.save') }} -->
    </div>
</template>

<script setup>
const {t} = useI18n()
t('button.save')

import {useResourceStore } from '~/store/resources.store'
const resourceStore = useResourceStore()
const { rscMailObject, getNotDisabled } = storeToRefs(resourceStore)
rscMailObject.value = [{}]
resourceStore.login()
</script>

<style lang="scss" scoped>
.home {
    @apply flex flex-col gap-12;
}
</style>
