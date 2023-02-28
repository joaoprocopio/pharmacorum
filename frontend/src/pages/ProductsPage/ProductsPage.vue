<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <template v-if="initializing">
      <AppInitializer :initializing="initializing" />
    </template>
    <template v-else>
      <ProductsCard
        v-for="product in pagination.products"
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
  const pagination = reactive({
    products: [],
    count: 0,
    page: 1,
    perPage: 15,
    length: computed(() => Math.ceil(pagination.count / pagination.perPage)),
  })

  const fetch = async () => {
    initializing.value = true

    const { data, status } = await ProductsServices.getProducts()

    if (status === 200) {
      initializing.value = false
      pagination.count = data.count
      pagination.products = data.products
    }
  }

  onBeforeMount(() => fetch())
</script>
