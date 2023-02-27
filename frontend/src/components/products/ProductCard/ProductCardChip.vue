<template>
  <VChip
    v-if="ProductTypesEnum.DRUG === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="medication"
    color="green" />
  <VChip
    v-if="ProductTypesEnum.SUPPLEMENT === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="healing"
    color="orange" />
  <VChip
    v-if="ProductTypesEnum.COSMETIC === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    color="purple"
    prepend-icon="spa" />
  <VChip
    v-if="ProductTypesEnum.HYGIENE === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="soap"
    color="blue" />
  <VChip
    v-if="ProductTypesEnum.BABY_AND_KIDS === $props.type"
    border
    label
    :text="$props.type"
    class="mr-2 my-1"
    prepend-icon="child_friendly"
    color="pink" />
</template>

<script setup>
  import { ProductTypesEnum } from "~/assets"

  const $props = defineProps({
    type: {
      type: String,
      required: true,
      validator: (type) => Object.values(ProductTypesEnum).includes(type),
    },
  })
</script>
