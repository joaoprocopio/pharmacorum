<template>
  <VResponsive
    class="mx-auto py-12 px-8"
    max-width="600">
    <SessionsUser />
    <SessionsPassword />
  </VResponsive>
</template>

<script setup>
  import { SessionsUser, SessionsPassword } from "~/components"
</script>
