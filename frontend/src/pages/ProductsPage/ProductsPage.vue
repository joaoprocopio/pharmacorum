<template>
  <!-- TODO: separar isso tudo em pequenos componentes -->
  <!-- TODO: ter uma app bar com theme toggle -->

  <!-- TODO: tela de login -->
  <!-- TODO: tela de registro -->
  <!-- TODO: criar um middleware, para usuário não autenticado não poder acessar -->
  <!-- TODO: isso implica em ter uma store pra usuários -->
  <template
    v-for="product in $productSearch.products"
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
    v-model="$productSearch.params.page"
    :length="$productSearch.pagesAvailable" />
</template>

<script setup>
  import { onBeforeMount, watch } from "vue"
  import { ProductServices } from "~/services"
  import { useProductSearchStore } from "~/stores"

  const $productSearch = useProductSearchStore()

  async function callApi() {
    const response = await ProductServices.getProducts(
      $productSearch.params.page,
      $productSearch.params.perPage
    )

    $productSearch.count = response.count
    $productSearch.products = response.products
  }

  onBeforeMount(() => {
    callApi()
  })

  watch($productSearch.params, () => {
    callApi()
  })
</script>
