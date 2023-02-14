<template>
  <VAppBar
    :border="true"
    density="comfortable"
    class="px-4"
    elevation="0">
    <template #prepend>
      <VBtn
        icon="spa"
        variant="plain"
        :to="{ name: ProductsPageName }" />
    </template>
    <template #append>
      <VBtn
        :icon="$globalTheme.theme === 'light' ? 'light_mode' : 'dark_mode'"
        variant="plain"
        @click="$globalTheme.toggleTheme" />
    </template>
  </VAppBar>
</template>

<script setup>
  import { ProductsPageName } from "~/assets"
  import { useGlobalThemeStore } from "~/stores"

  const $globalTheme = useGlobalThemeStore()
</script>
