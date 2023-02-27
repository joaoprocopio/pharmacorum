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
      <VPagination
        v-model="pagination.page"
        :length="pagination.length"
        variant="text" />
    </template>
  </VResponsive>
</template>

<script setup>
  import { ref, computed, reactive, onBeforeMount } from "vue"

  import { AppInitializer, ProductsCard } from "~/components"
  import { ProductsServices } from "~/services"

  const initializing = ref(true)
  const products = ref([])
  const pagination = reactive({
    page: 1,
    perPage: 15,
    productsCount: 0,
    length: computed(() =>
      Math.ceil(pagination.productsCount / pagination.perPage)
    ),
  })

  onBeforeMount(async () => {
    const { data, status } = await ProductsServices.getProducts()

    pagination.productsCount = data.count
    products.value = data.products

    if (status === 200) initializing.value = false
  })
</script>
