<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    {{ $props.page }}
  </VResponsive>
</template>

<script setup>
  import { onMounted } from "vue"
  import { ProductsServices } from "~/services"

  onMounted(async () => {
    const { data } = await ProductsServices.getProducts()

    console.log(data)
  })

  const $props = defineProps({
    page: {
      type: String,
      default: "1",
    },
  })
</script>
