<template>
  <VCard
    border
    class="mb-8 px-6 py-4"
    elevation="0"
    :to="{
      /* TODO */
    }">
    <div class="d-flex justify-space-between mb-4">
      <div class="d-flex flex-column">
        <div class="text-h6" v-text="$props.product.title" />
        <div class="text-grey" v-text="$props.product.brand.name" />
      </div>
      <div class="d-flex flex-column align-end">
        <div class="text-h6" v-text="$props.product.quantity" />
        <div class="text-grey" v-text="'Available'" />
      </div>
    </div>
    <div class="mb-4" v-text="$props.product.description" />
    <div class="d-flex justify-space-between align-center">
      <div>
        <template v-for="(type, id) in $props.product.types" :key="id">
          <ProductsCardChip
            :title="ProductTypesEnum[type].title"
            :icon="ProductTypesEnum[type].icon"
            :color="ProductTypesEnum[type].color" />
        </template>
      </div>
      <div class="ml-2" v-text="currency.format($props.product.price, 0)" />
    </div>
  </VCard>
</template>

<script setup>
  import { ProductsCardChip } from "~/components"
  import { ProductTypesEnum } from "~/assets"
  import { currency } from "~/utils"

  const $props = defineProps({
    product: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  })
</script>
