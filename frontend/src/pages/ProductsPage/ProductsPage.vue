<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    {{ $props.page }}
  </VResponsive>
</template>

<script setup>
  const $props = defineProps({
    page: {
      type: String,
      default: "1",
    },
  })
</script>
