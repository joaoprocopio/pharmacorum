<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <VCard border class="mb-8 px-6 py-4" elevation="0">
      <section class="d-flex justify-space-between mb-4">
        <article class="d-flex">
          <VBtn
            icon="arrow_back"
            variant="text"
            class="mr-4"
            @click="$router.back()" />
          <div>
            <h1 v-text="product.title" />
            <p class="text-grey" v-text="product.brand?.name" />
          </div>
        </article>
        <article class="d-flex flex-column align-end">
          <h1 v-text="product.quantity" />
          <p class="text-grey" v-text="'Available'" />
        </article>
      </section>
      <section>
        <article class="mb-4" v-text="product.description" />
      </section>
      <section class="d-flex justify-space-between align-center">
        <article>
          <template v-for="(type, typeId) in product.types" :key="typeId">
            <ProductsListCardChip
              :title="ProductTypesEnum[type].title"
              :icon="ProductTypesEnum[type].icon"
              :color="ProductTypesEnum[type].color" />
          </template>
        </article>
        <article class="ml-2">
          <h1 v-text="currency.format(product.price, 0)" />
        </article>
      </section>
    </VCard>
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { currency } from "~/utils"
  import { ProductTypesEnum } from "~/assets"
  import { ProductsListCardChip } from "~/components"
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
