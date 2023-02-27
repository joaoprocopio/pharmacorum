<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <ProductsCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @show="show" />
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { ProductsCard } from "~/components"
  import { ProductsServices } from "~/services"

  const products = ref([])

  const show = (id) => {
    // TODO: isso aqui tem que jogar pra uma tela de edição e visualização
    return id
  }

  onMounted(async () => {
    const { data } = await ProductsServices.getProducts()

    products.value = data.products
  })
</script>
