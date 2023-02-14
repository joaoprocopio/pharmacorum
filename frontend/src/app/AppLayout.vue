<template>
  <v-app :theme="$globalTheme.theme">
    <component :is="layout">
      <slot />
    </component>
  </v-app>
</template>

<script setup>
  import { computed } from "vue"

  import { useRoute } from "vue-router"
  import { useGlobalThemeStore } from "~/stores"

  import { DefaultLayoutName } from "~/assets"

  const $globalTheme = useGlobalThemeStore()
  const $route = useRoute()

  const layout = computed(() => $route?.meta?.layout?.name || DefaultLayoutName)
</script>
