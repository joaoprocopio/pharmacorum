<template>
  <VResponsive
    class="mx-auto py-8 px-8"
    max-width="600">
    <h1 class="font-weight-bold mb-8">Page not found</h1>
    <p>
      Sorry, but the page
      <VCode class="d-inline-flex">{{ $route.path }}</VCode> could not be found
      in our servers.
    </p>
  </VResponsive>
</template>
