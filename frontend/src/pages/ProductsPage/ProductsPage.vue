<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <div
      v-if="initializing"
      class="mt-16 d-flex flex-column align-center justify-center">
      <VProgressCircular size="128" width="8" color="primary" indeterminate />
    </div>
    <ProductsCard
      v-for="product in products"
      v-else
      :key="product.id"
      :product="product" />
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { ProductsCard } from "~/components"
  import { ProductsServices } from "~/services"

  const initializing = ref(true)
  const products = ref([])

  onMounted(async () => {
    const { data, status } = await ProductsServices.getProducts()

    products.value = data.products

    if (status === 200) initializing.value = false
  })
</script>
