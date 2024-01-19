<template>
  <UButton icon="i-heroicons-arrow-uturn-left" @click="back">Retour</UButton>
</template>
<script setup>
const back = () => {
  useRouter().back();
};
</script>
