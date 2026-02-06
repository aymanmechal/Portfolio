<template>
  <div style="padding: 24px">
    <h1>Oups…</h1>
    <p>Une erreur est survenue.</p>
    <p v-if="error?.statusCode">Code : {{ error.statusCode }}</p>
    <p v-if="error?.message">{{ error.message }}</p>
    <button @click="clearError({ redirect: '/' })">Retour à l’accueil</button>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>
