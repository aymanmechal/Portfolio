<template>
    <section class="about" id="about">
        <BaseTitle :text="t('about.title')" />

        <div class="about-content">
            <BaseCard class="about-card">
                <div class="about-texts">
                    <BaseText :text="t('about.intro')" />
                    <BaseText :text="t('about.vision')" />
                    <BaseText :text="t('about.goal')" />
                </div>

                <div class="about-actions">
                    <BaseButton :text="t('about.buttons.contact')" @customClick="onContactClick" />
                    <BaseButton :text="t('about.buttons.download_cv')" @customClick="onDownloadCv" />
                </div>
            </BaseCard>

            <div class="about-avatar">
                <BaseCard rounded class="avatar-circle" aria-hidden="true">
                    <NuxtImg src="/images/dos.png" class="avatar-img" />
                </BaseCard>

                <div class="about-socials">
                    <BaseCard rounded class="reseaux">
                        <a
                            class="social-link"
                            href="https://linkedin.com/in/ayman-mechal"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Icon name="simple-icons:linkedin" class="social-icon" />
                        </a>
                    </BaseCard>
                    <BaseCard rounded class="reseaux">
                        <a
                            class="social-link"
                            href="https://wa.me/3367423645"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                        >
                            <Icon name="simple-icons:whatsapp" class="social-icon" />
                        </a>
                    </BaseCard>
                    <BaseCard rounded class="reseaux">
                        <a
                            class="social-link"
                            href="https://github.com/aymanmechal"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <Icon name="simple-icons:github" class="social-icon" />
                        </a>
                    </BaseCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()

const onContactClick = () => {
    navigateTo('/contact')
}

const onDownloadCv = () => {
    // dl le cv
}
</script>

<style scoped>
.about {
    @apply mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 pb-16;
}

.about-content {
    @apply flex w-full flex-col items-center gap-10 md:flex-row md:items-start md:justify-between;
}

.about-card {
    @apply w-full max-w-xl bg-[#101828] ring-1 ring-blue-700/40 shadow-lg shadow-blue-900/40;
}

.about-texts {
    @apply flex flex-col gap-3 text-left;
}

.about-actions {
    @apply mt-6 flex flex-wrap gap-3;
}

.about-avatar {
    @apply flex flex-col items-center gap-4;
}

.avatar-circle {
    @apply flex h-56 w-56 items-center justify-center overflow-hidden bg-blue-700;
}

.avatar-img {
    @apply h-full w-full object-cover object-center scale-110;
}

.about-socials {
    @apply flex items-center gap-3;
}

.reseaux {
    @apply flex h-10 w-10 items-center justify-center border border-blue-600 bg-transparent text-blue-100 transition hover:bg-blue-600 hover:text-white;
}

.social-link {
    @apply flex h-full w-full items-center justify-center;
}

.social-icon {
    @apply h-5 w-5;
}
</style>
