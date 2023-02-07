<template>
  <div>THIS IS A HOME PAGE!</div>
</template>

<script setup>
  import { onMounted } from "vue"
  import { $axios } from "~/api"

  onMounted(() => {
    $axios.get("/")
  })
</script>
