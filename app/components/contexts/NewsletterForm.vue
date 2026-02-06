<template>
    <form class="newsletter" @submit.prevent="onSubmit">
        <label class="newsletter-label" for="newsletter-email">Newsletter</label>
        <div class="newsletter-row">
            <TextInput
                id="newsletter-email"
                v-model="email"
                name="email"
                type="email"
                placeholder="Ton email"
                :input-class="'newsletter-input'"
            />
            <BaseButton class="newsletter-button" text="S'inscrire" type="submit" />
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const onSubmit = () => {
    console.log('newsletter signup:', email.value)
    email.value = ''
}
</script>

<style scoped>
.newsletter {
    @apply w-full max-w-[480px];
}

.newsletter-label {
    @apply block text-sm text-slate-300 mb-2;
}

.newsletter-row {
    @apply flex flex-col gap-2 sm:flex-row;
}

.newsletter-input {
    @apply w-full border-0 rounded-[12px] py-3 px-[14px] bg-[#d7e4ff] text-[#1a2433] text-[14px] outline-none;
}

.newsletter-button {
    @apply rounded-[12px] px-5 py-3 min-w-[140px] text-sm;
}
</style>