<template>
  <VApp :theme="$theme.theme">
    <component :is="$route?.meta?.layout?.name ?? DefaultLayoutName">
      <slot />
    </component>
  </VApp>
</template>

<script setup>
  import { useThemeStore } from "~/stores"
  import { DefaultLayoutName } from "~/assets"

  const $theme = useThemeStore()
</script>
