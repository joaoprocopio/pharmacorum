<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    {{ $props.id }}
  </VResponsive>
</template>

<script setup>
  const $props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })
</script>
