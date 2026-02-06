<template>
    <section class="profile">
        <BaseText :text="t('presentation.hello')" class="profile-bonjour" />
        <div class="profile-name">
            <BaseName :text="PRENOM" />
            <BaseName :text="NOM" />
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()

const PRENOM = "AYMAN"
const NOM = "MECHAL"
</script>

<style scoped>
.profile {
    @apply mx-auto flex min-h-[70vh] flex-col items-center justify-center px-6 text-center;
}

.profile-bonjour {
    @apply mb-2 text-base font-medium;
}

.profile-name {
    @apply flex w-full flex-col items-center;
}
</style>