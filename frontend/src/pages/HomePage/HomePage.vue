<template>
  <div></div>
</template>

<script setup>
  import { onMounted } from "vue"
  import { $axios } from "~/api"

  onMounted(() => {
    // $axios.get("/api/users/")
    $axios.get("/api/products/").then((r) => console.log(r.data))
    $axios.get("/api/brands/").then((r) => console.log(r.data))
    // $axios.get("/api/types/")
  })
</script>
