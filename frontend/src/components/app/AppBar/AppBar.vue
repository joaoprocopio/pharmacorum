<template>
  <VAppBar
    :border="true"
    class="px-4"
    elevation="0">
    <template #prepend>
      <VBtn
        icon="local_hospital"
        color="primary"
        :disabled="$route.name === SessionsPageName"
        :to="{ name: ProductsPageName }" />
    </template>
    <template #append>
      <VBtn
        :icon="$theme.current === 'light' ? 'light_mode' : 'dark_mode'"
        @click="$theme.toggleTheme" />
    </template>
  </VAppBar>
</template>

<script setup>
  import { ProductsPageName, SessionsPageName } from "~/assets"
  import { useThemeStore } from "~/stores"

  const $theme = useThemeStore()
</script>
