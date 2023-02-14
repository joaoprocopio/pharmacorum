<template>
  <AppBar />
  <VMain>
    <slot />
  </VMain>
  <VFooter />
</template>

<script setup>
  import { AppBar } from "~/components"
</script>
