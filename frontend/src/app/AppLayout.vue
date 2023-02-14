<template>
  <v-app :theme="$globalTheme.theme">
    <component :is="layout">
      <slot />
    </component>
  </v-app>
</template>

<script setup>
  import { useGlobalThemeStore } from "~/stores"
  import { computed } from "vue"
  import { useRoute } from "vue-router"

  const $globalTheme = useGlobalThemeStore()
  const $route = useRoute()

  const layout = computed(() => $route?.meta?.layout || "DefaultLayout")
</script>
