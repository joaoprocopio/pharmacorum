<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <VCard border class="mb-8 px-6 py-4" elevation="0">
      <div class="d-flex justify-space-between align-center">
        <VBtn
          icon="arrow_back"
          variant="text"
          :to="{ name: ProductsListPageName }" />
        <VBtn
          icon="edit"
          variant="text"
          @click="
            $router.push({
              name: ProductsEditPageName,
              params: { id: product.id },
            })
          " />
      </div>
    </VCard>
    <ProductsListCard v-if="!initializing" :product="product" />
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { ProductsListCard } from "~/components"
  import { ProductsServices } from "~/services"
  import { ProductsListPageName, ProductsEditPageName } from "~/assets"

  const $props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })

  const initializing = ref(true)
  const product = ref({})

  const fetch = async () => {
    initializing.value = true

    const { data, status } = await ProductsServices.getProductById(
      $props.id
    ).finally(() => {
      initializing.value = false
    })

    if (status === 200) product.value = data
  }

  onMounted(() => fetch())
</script>
