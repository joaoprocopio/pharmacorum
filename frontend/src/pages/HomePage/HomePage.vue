<template>
  <div
    v-for="product in products"
    :key="product.id">
    {{ product }}
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue"
  import { $axios } from "~/api"

  const products = ref({})

  onMounted(() => {
    $axios.get("/api/products/").then((r) => (products.value = r.data.products))
  })
</script>
