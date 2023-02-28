<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <template v-if="initializing">
      <AppInitializer :initializing="initializing" />
    </template>
    <template v-else>
      <ProductsCard
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </template>
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { AppInitializer, ProductsCard } from "~/components"
  import { ProductsServices } from "~/services"

  const initializing = ref(true)
  const products = ref([])
  const count = ref(0)

  const fetch = async () => {
    initializing.value = true

    const { data, status } = await ProductsServices.getProducts().finally(
      () => {
        initializing.value = false
      }
    )

    if (status === 200) {
      count.value = data.count
      products.value.push(...data.products)
    }
  }

  onMounted(() => fetch())
</script>
