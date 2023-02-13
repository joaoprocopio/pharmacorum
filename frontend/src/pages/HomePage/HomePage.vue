<template>
  <template
    v-for="product in products"
    :key="product.id">
    <div class="mb-6">
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
  </template>
  <VPagination :length="pages"></VPagination>
</template>

<script setup>
  import { onMounted, computed, ref } from "vue"
  import { $axios } from "~/api"

  const page = ref(1)
  const perPage = ref(30)

  const pages = computed(() => responseLength.value / perPage.value)
  const responseLength = ref(0)
  const products = ref({})

  onMounted(() => {
    $axios
      .get("/api/products", {
        params: { per_page: perPage.value, page: page.value },
      })
      .then((response) => {
        responseLength.value = response.data.response_length
        products.value = response.data.products
      })
  })
</script>
