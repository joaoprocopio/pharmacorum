<template>
  <template
    v-for="product in products"
    :key="product.id">
    <div class="mb-6">
      <div>
        {{ product.title }}
      </div>
      <div>
        {{ product.description }}
      </div>
      <div>
        {{ product.updated_at }}
      </div>
    </div>
  </template>
</template>

<script setup>
  import { onMounted, ref } from "vue"
  import { $axios } from "~/api"

  const products = ref({})

  onMounted(() => {
    $axios
      .get("/api/products", { params: { per_page: 100 } })
      .then((response) => (products.value = response.data.products))
  })
</script>
