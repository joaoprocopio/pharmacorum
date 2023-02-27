<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <template v-for="product in products" :key="product.id">
      <VCard border class="mb-8 px-6 py-4" elevation="0" @click="() => {}">
        <div class="d-flex justify-space-between mb-6">
          <div class="d-flex flex-column">
            <div class="text-h6" v-text="product.title" />
            <div
              class="text-subtitle-2 text-grey"
              v-text="product.brand.name" />
          </div>
          <div class="d-flex flex-column align-end">
            <div class="text-h6" v-text="product.quantity" />
            <div class="text-subtitle-2 text-grey" v-text="'Available'" />
          </div>
        </div>
        <div class="mb-4" v-text="product.description" />
        <div class="d-flex justify-space-between align-center">
          <div>
            <template v-for="(type, id) in product.types" :key="id">
              <VChip
                v-if="ProductTypes.DRUG === type"
                border
                label
                :text="type"
                class="mr-2 my-1"
                color="green" />
              <VChip
                v-if="ProductTypes.SUPPLEMENT === type"
                border
                label
                :text="type"
                class="mr-2 my-1"
                color="orange" />
              <VChip
                v-if="ProductTypes.COSMETIC === type"
                border
                label
                :text="type"
                class="mr-2 my-1"
                color="purple" />
              <VChip
                v-if="ProductTypes.HYGIENE === type"
                border
                label
                :text="type"
                class="mr-2 my-1"
                color="blue" />
              <VChip
                v-if="ProductTypes.BABY_AND_KIDS === type"
                border
                label
                :text="type"
                class="mr-2 my-1"
                color="pink" />
            </template>
          </div>
          <div
            class="text-subtitle-2"
            v-text="currency.format(product.price, 0)" />
        </div>
      </VCard>
    </template>
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { currency } from "~/utils"
  import { ProductsServices } from "~/services"
  import { ProductTypes } from "~/assets"

  const products = ref([])

  onMounted(async () => {
    const { data } = await ProductsServices.getProducts()

    products.value = data.products
  })
</script>
