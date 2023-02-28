<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <ProductsCard
      v-for="product in products"
      :key="product.id"
      :product="product" />
    <AppInitializer v-show="initializing" :initializing="initializing" />
    <div
      v-if="products.length && products.length === count"
      class="text-grey text-center">
      There is no more products to show.
    </div>
    <div v-if="products.length" v-intersect="onIntersect" />
  </VResponsive>
</template>

<script setup>
  import { ref, computed, onMounted } from "vue"
  import { debounce, inRange } from "lodash"

  import { AppInitializer, ProductsCard } from "~/components"
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

<!-- 
<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <ProductsCard
      v-for="product in products"
      :key="product.id"
      :product="product" />
    <VProgressCircular v-if="loading" indeterminate class="mb-4" />
    <div v-if="products.length === count && products.length !== 0">
      ACABOU OS PRODUTOS, CARALHO!
    </div>
    <div v-if="products.length > 1" v-intersect="onIntersect" />
  </VResponsive>
</template>

<script setup>
  import { ref, computed, onMounted } from "vue"
  import { debounce, inRange } from "lodash"

  import { ProductsCard } from "~/components"
  import { ProductsServices } from "~/services"

  const loading = ref(true)
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
    loading.value = true

    const { data, status } = await ProductsServices.getProducts(
      page.value
    ).finally(() => {
      loading.value = false
    })

    if (status === 200) {
      count.value = data.count
      products.value.push(...data.products)
    }
  }

  onMounted(() => fetch())
</script> -->
