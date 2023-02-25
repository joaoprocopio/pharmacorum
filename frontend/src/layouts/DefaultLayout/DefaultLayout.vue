<template>
  <AppBar :simple="$route?.meta?.layout?.simple" />
  <VMain>
    <slot />
  </VMain>
  <AppToast />
</template>

<script setup>
  import { AppBar, AppToast } from "~/components"
</script>
