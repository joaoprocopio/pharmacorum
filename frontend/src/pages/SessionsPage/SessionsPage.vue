<template>
  <VResponsive
    class="mx-auto py-12 px-8"
    max-width="600">
    <SessionsIdentification />
    <SessionsAuthentication />
  </VResponsive>
</template>

<script setup>
  import { SessionsIdentification, SessionsAuthentication } from "~/components"
</script>
