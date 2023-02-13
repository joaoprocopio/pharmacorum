<template>
  <div></div>
</template>

<script setup>
  import { onMounted } from "vue"
  import { $axios } from "~/api"

  onMounted(() => {
    $axios.get("/api/users/")
    // TODO: agr isso aqui vai entrar na query string, tem que pegar no backend com request.GET.get('per_page')
    $axios.get("/api/products/", { params: { per_page: 30, page: 2 } })
  })
</script>
