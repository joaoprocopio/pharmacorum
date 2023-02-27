<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <template v-for="product in products" :key="product.id">
      <VCard border class="mb-4 px-6 py-4" elevation="0" @click="() => {}">
        <div class="mb-1 d-flex justify-space-between align-center text-h6">
          <div>
            {{ product.title }}
          </div>
          <div>
            {{ product.quantity }}
          </div>
        </div>
        <div class="mb-2 text-subtitle-2 text-grey">
          {{ product.brand.name }}
        </div>
        <div class="mb-4">
          {{ product.description }}
        </div>
        <div class="d-flex justify-space-between align-center">
          <div>
            <VChip
              v-for="(type, id) in product.types"
              :key="id"
              label
              class="mr-2 my-1">
              {{ type }}
            </VChip>
          </div>
          <div class="text-subtitle-6">
            {{ product.price }}
          </div>
        </div>
      </VCard>
    </template>
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"

  import { ProductsServices } from "~/services"

  const products = ref([])

  onMounted(async () => {
    const { data } = await ProductsServices.getProducts()

    products.value = data.products
  })
</script>
