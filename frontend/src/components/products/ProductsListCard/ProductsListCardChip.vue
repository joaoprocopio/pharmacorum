<template>
  <VChip
    border
    label
    class="mr-2 my-1 font-weight-bold"
    :text="$props.title"
    :prepend-icon="$props.icon"
    :color="$props.color" />
</template>

<script setup>
  const $props = defineProps({
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  })
</script>
