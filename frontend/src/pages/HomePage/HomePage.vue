<template>
  <div>THIS IS A HOME PAGE!</div>
</template>

<script setup>
  import { onMounted } from "vue"
  import { $axios } from "~/api"

  onMounted(() => {
    $axios.get("/api/products/").then((r) => console.log(r.data.products[0]))
  })
</script>
