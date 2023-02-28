<template>
  <div
    v-if="$props.initializing"
    class="d-flex flex-column align-center justify-center">
    <VProgressCircular size="64" color="primary" indeterminate />
  </div>
</template>

<script setup>
  const $props = defineProps({
    initializing: {
      type: Boolean,
      required: true,
    },
  })
</script>
