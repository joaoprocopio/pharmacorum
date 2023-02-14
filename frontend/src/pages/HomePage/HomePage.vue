<template>
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
        <div>
          {{ product.type.join(" - ") }}
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
  // TODO: todo esse código tá uma merda, refatorar e separar em stores e componentes"
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
      perPage.value,
      page.value
    )

    responseLength.value = response.response_length
    products.value = response.products
  }

  onMounted(() => {
    callApi()
  })
</script>
