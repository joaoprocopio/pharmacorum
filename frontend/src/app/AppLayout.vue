<template>
  <v-app :theme="$theme.theme">
    <component :is="layout">
      <slot />
    </component>
  </v-app>
</template>

<script setup>
  import { computed } from "vue"

  import { useRoute } from "vue-router"
  import { useThemeStore } from "~/stores"

  import { DefaultLayoutName } from "~/assets"

  const $theme = useThemeStore()
  const $route = useRoute()

  const layout = computed(() => $route?.meta?.layout?.name || DefaultLayoutName)
</script>
