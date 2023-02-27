<template>
  <VChip
    v-if="ProductTypes.DRUG === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="medication"
    color="green" />
  <VChip
    v-if="ProductTypes.SUPPLEMENT === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="healing"
    color="orange" />
  <VChip
    v-if="ProductTypes.COSMETIC === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    color="purple"
    prepend-icon="spa" />
  <VChip
    v-if="ProductTypes.HYGIENE === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="soap"
    color="blue" />
  <VChip
    v-if="ProductTypes.BABY_AND_KIDS === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="child_friendly"
    color="pink" />
</template>

<script setup>
  import { ProductTypes } from "~/assets"

  const $props = defineProps({
    type: {
      type: String,
      required: true,
      validator: (type) => Object.values(ProductTypes).includes(type),
    },
  })
</script>
