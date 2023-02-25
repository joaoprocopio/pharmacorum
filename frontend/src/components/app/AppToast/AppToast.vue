<template>
  <VSnackbar
    v-model="$toast.opened"
    location="top"
    :color="$toast.color"
    :timeout="$toast.timeout"
    :multi-line="$toast.multiLine"
    :vertical="$toast.vertical">
    {{ $toast.message }}
    <template #actions>
      <VBtn icon="close" @click="$toast.opened = !$toast.opened" />
    </template>
  </VSnackbar>
</template>

<script setup>
  import { useToastStore } from "~/stores"

  const $toast = useToastStore()
</script>
