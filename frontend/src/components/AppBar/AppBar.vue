<template>
  <VAppBar
    :border="true"
    density="comfortable"
    class="px-4"
    elevation="0">
    <template #prepend>
      <VBtn
        icon="spa"
        color="primary"
        :disabled="$route.name === SessionsPageName"
        :to="{ name: ProductsPageName }" />
    </template>
    <template #append>
      <VBtn
        :icon="$theme.theme === 'light' ? 'light_mode' : 'dark_mode'"
        @click="$theme.toggleTheme" />
    </template>
  </VAppBar>
</template>

<script setup>
  import { useRoute } from "vue-router"
  import { ProductsPageName, SessionsPageName } from "~/assets"
  import { useThemeStore } from "~/stores"

  const $theme = useThemeStore()
  const $route = useRoute()
</script>
