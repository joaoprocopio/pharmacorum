<template>
  <VCard border class="mb-8 px-6 py-4" elevation="0">
    <section class="d-flex justify-space-between mb-4">
      <article class="d-flex flex-column">
        <h1 v-text="$props.product.title" />
        <p class="text-grey" v-text="$props.product.brand.name" />
      </article>
      <article class="d-flex flex-column align-end">
        <h1 v-text="$props.product.quantity" />
        <p class="text-grey" v-text="'Available'" />
      </article>
    </section>
    <section>
      <article class="mb-4" v-text="$props.product.description" />
    </section>
    <section class="d-flex justify-space-between align-center">
      <article>
        <template v-for="(type, id) in $props.product.types" :key="id">
          <ProductsListCardChip
            :title="ProductTypesEnum[type].title"
            :icon="ProductTypesEnum[type].icon"
            :color="ProductTypesEnum[type].color" />
        </template>
      </article>
      <article class="ml-2">
        <h1 v-text="currency.format($props.product.price, 0)" />
      </article>
    </section>
  </VCard>
</template>

<script setup>
  import { ProductsListCardChip } from "~/components"
  import { ProductTypesEnum } from "~/assets"
  import { currency } from "~/utils"

  const $props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  })
</script>
