<template>
  <template
    v-for="product in products"
    :key="product.id">
    <div class="d-flex mb-4 align-center">
      <div class="mr-8">
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
      <VIcon icon="delete"></VIcon>
      <VIcon icon="edit"></VIcon>
    </div>
  </template>
  <VPagination
    v-model="page"
    :length="pages"></VPagination>
</template>

<script setup>
  import { onMounted, computed, ref, watch } from "vue"
  import { $axios } from "~/api"

  // TODO: todo esse código tá uma merda, refatorar e separar em stores e componentes"

  const page = ref(1)
  const perPage = ref(5)

  const pages = computed(() => Math.ceil(responseLength.value / perPage.value))
  const responseLength = ref(0)
  const products = ref({})

  watch(page, async () => {
    callApi()
  })

  async function callApi() {
    return $axios
      .get("/api/products", {
        params: { per_page: perPage.value, page: page.value },
      })
      .then((response) => {
        responseLength.value = response.data.response_length
        products.value = response.data.products
      })
  }

  onMounted(() => {
    callApi()
  })
</script>
