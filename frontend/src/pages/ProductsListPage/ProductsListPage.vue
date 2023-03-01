<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <ProductsListCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :to="{ name: ProductsViewPageName, params: { id: product.id } }" />
    <VResponsive
      height="64"
      content-class="d-flex flex-column align-center justify-center">
      <VProgressCircular
        v-if="initializing"
        size="64"
        width="8"
        color="primary"
        indeterminate />
      <div
        v-if="products.length && products.length === count"
        class="text-grey text-center"
        v-text="'There is no more products to show'" />
      <div v-if="products.length" v-intersect="onIntersect" />
    </VResponsive>
  </VResponsive>
</template>

<script setup>
  import { ref, computed, onMounted } from "vue"
  import { debounce, inRange } from "lodash"

  import { ProductsViewPageName } from "~/assets"
  import { ProductsListCard } from "~/components"
  import { ProductsServices } from "~/services"

  const initializing = ref(true)
  const products = ref([])
  const timeout = ref(500)
  const count = ref(0)
  const page = ref(1)
  const perPage = ref(30)
  const length = computed(() => Math.ceil(count.value / perPage.value))

  const onIntersect = debounce((isIntersecting) => {
    if (isIntersecting && inRange(page.value, page.value, length.value)) {
      page.value += 1
      fetch()
    }
  }, timeout.value)

  const fetch = async () => {
    initializing.value = true

    const { data, status } = await ProductsServices.getProducts(
      page.value,
      perPage.value
    ).finally(() => {
      initializing.value = false
    })

    if (status === 200) {
      count.value = data.count
      products.value.push(...data.products)
    }
  }

  onMounted(() => fetch())
</script>
