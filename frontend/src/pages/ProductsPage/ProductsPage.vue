<template>
  <!-- TODO: separar isso tudo em pequenos componentes -->
  <!-- TODO: tela de login -->
  <!-- TODO: tela de registro -->
  <!-- TODO: criar um middleware, para usuário não autenticado não poder acessar -->
  <!-- TODO: isso implica em ter uma store pra usuários -->
  <template
    v-for="product in $products.products"
    :key="product.id">
    <VResponsive
      class="mx-auto pt-8 pb-8"
      content-class="d-flex flex-row align-center justify-space-between"
      max-width="500">
      <div class="pr-16">
        <div>
          {{ product.title }}
        </div>
        <div>
          {{ product.brand.name }}
        </div>
        <div>
          {{ product.quantity }}
        </div>
        <div>
          {{ product.price }}
        </div>
      </div>
      <div>
        <VIcon icon="delete" />
        <VIcon icon="edit" />
      </div>
    </VResponsive>
  </template>
  <VPagination
    v-model="$products.params.page"
    :length="$products.pagesAvailable" />
</template>

<script setup>
  import { onBeforeMount, watch } from "vue"
  import { ProductsServices } from "~/services"
  import { useProductsStore } from "~/stores"

  const $products = useProductsStore()

  async function callApi() {
    const response = await ProductsServices.getProducts(
      $products.params.page,
      $products.params.perPage
    )

    $products.count = response.count
    $products.products = response.products
  }

  onBeforeMount(() => {
    callApi()
  })

  watch($products.params, () => {
    callApi()
  })
</script>
