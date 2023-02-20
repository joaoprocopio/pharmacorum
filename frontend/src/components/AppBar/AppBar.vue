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
        :icon="$theme.theme === 'light' ? 'light_mode' : 'dark_mode'"
        variant="plain"
        @click="$theme.toggleTheme" />
    </template>
  </VAppBar>
</template>

<script setup>
  import { ProductsPageName } from "~/assets"
  import { useThemeStore } from "~/stores"

  const $theme = useThemeStore()
</script>
