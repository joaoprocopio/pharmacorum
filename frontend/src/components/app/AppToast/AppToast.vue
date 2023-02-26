<template>
  <VSnackbar
    v-if="$toast.options.show"
    v-model="$toast.options.show"
    :color="$toast.options.color"
    :timeout="$toast.options.timeout"
    :multi-line="$toast.options.multiLine"
    :vertical="$toast.options.vertical"
    location="top">
    {{ $toast.options.message }}
    <template #actions>
      <VBtn icon="close" @click="$toast.options.show = !$toast.options.show" />
    </template>
  </VSnackbar>
</template>

<script setup>
  import { useToastStore } from "~/stores"

  const $toast = useToastStore()
</script>
