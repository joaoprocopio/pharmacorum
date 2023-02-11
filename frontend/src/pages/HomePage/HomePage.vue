<template>
  <div></div>
</template>

<script setup>
  import { onMounted } from "vue"
  import { $axios } from "~/api"

  onMounted(() => {
    $axios.get("/api/users/")
    $axios.get("/api/products/", { data: { per_page: 30, page: 2 } })
  })
</script>
