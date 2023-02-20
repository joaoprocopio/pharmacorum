<template>
  <VResponsive
    class="mx-auto py-12 px-8"
    max-width="600">
    <h1 class="font-weight-bold mb-6">Page not found</h1>
    <p>
      Sorry, but the page
      <VCode class="d-inline-flex">{{ $route.path }}</VCode> could not be found
      in our servers.
    </p>
  </VResponsive>
</template>

<script setup>
  import { useRoute } from "vue-router"

  const $route = useRoute()
</script>
