<template>
  <!-- TODO: refatorar search pra uma store -->
  <!-- TODO: separar isso tudo em pequenos componentes -->
  <!-- TODO: ter uma app bar com theme toggle -->

  <!-- TODO: tela de login -->
  <!-- TODO: tela de registro -->
  <!-- TODO: criar um middleware, para usuário não autenticado não poder acessar -->
  <!-- TODO: isso implica em ter uma store pra usuários -->

  <!-- TODO: se os endpoints estão nomeados no plural, meu toc fala pra tmb deixar as pastas do projeto no plural tmb (TODAS) -->
  <template
    v-for="product in products"
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
    v-model="page"
    :length="pages" />
</template>

<script setup>
  import { onMounted, computed, ref, watch } from "vue"
  import { ProductServices } from "~/services"

  const page = ref(1)
  const perPage = ref(30)

  const pages = computed(() => Math.ceil(responseLength.value / perPage.value))
  const responseLength = ref(0)
  const products = ref({})

  watch(page, async () => {
    callApi()
  })

  async function callApi() {
    const response = await ProductServices.getProducts(
      page.value,
      perPage.value
    )

    responseLength.value = response.count
    products.value = response.products
  }

  onMounted(() => {
    callApi()
  })
</script>
