<template>
  <VSnackbar v-model="toast" />
</template>

<script setup>
  import { ref } from "vue"

  const toast = ref(true)
</script>
