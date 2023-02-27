<template>
  <VAlert
    v-if="$alert.options.show"
    :icon="$alert.options.icon"
    :color="$alert.options.color"
    :text="$alert.options.text"
    class="mb-6"
    variant="tonal" />
</template>

<script setup>
  import { useAlertStore } from "~/stores"

  const $alert = useAlertStore()
</script>
