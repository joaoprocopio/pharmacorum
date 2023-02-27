<template>
  <div
    v-if="$props.initializing"
    class="mt-16 d-flex flex-column align-center justify-center">
    <VProgressCircular size="128" width="8" color="primary" indeterminate />
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
