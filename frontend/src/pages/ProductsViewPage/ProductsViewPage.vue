<template>
  <!-- 
    TODO: to achando essa estrutura de paginas uma merda
    talvez seja legal fazer tudo em uma mesma página.
  -->
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <VBtn icon="arrow_back" variant="text" @click="$router.back()" />
    {{ product }}
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { ProductsServices } from "~/services"

  const $props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })

  const product = ref({})

  const fetch = async () => {
    const { data, status } = await ProductsServices.getProductById($props.id)

    if (status === 200) product.value = data
  }

  onMounted(() => fetch())
</script>
