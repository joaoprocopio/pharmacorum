<template>
  <VChip
    v-if="ProductsEnum.DRUG === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="medication"
    color="green" />
  <VChip
    v-if="ProductsEnum.SUPPLEMENT === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="healing"
    color="orange" />
  <VChip
    v-if="ProductsEnum.COSMETIC === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    color="purple"
    prepend-icon="spa" />
  <VChip
    v-if="ProductsEnum.HYGIENE === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="soap"
    color="blue" />
  <VChip
    v-if="ProductsEnum.BABY_AND_KIDS === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="child_friendly"
    color="pink" />
</template>

<script setup>
  import { ProductsEnum } from "~/assets"

  const $props = defineProps({
    type: {
      type: String,
      required: true,
      validator: (type) => Object.values(ProductsEnum).includes(type),
    },
  })
</script>
