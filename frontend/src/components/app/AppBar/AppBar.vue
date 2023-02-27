<template>
  <VAppBar :border="true" class="px-4" elevation="0">
    <template #prepend>
      <VBtn
        icon="local_pharmacy"
        color="primary"
        :disabled="$props.simple"
        :to="{ name: ProductsPageName }" />
    </template>
    <template v-if="!$props.simple" #append>
      <VMenu>
        <template #activator="{ props }">
          <VBtn color="primary" icon="menu" v-bind="props"></VBtn>
        </template>
        <VList class="pa-2">
          <VListItemAction>
            <VBtn :icon="icon" color="primary" @click="$theme.toggleTheme" />
          </VListItemAction>
          <VListItemAction>
            <VBtn icon="logout" color="primary" @click="logout" />
          </VListItemAction>
        </VList>
      </VMenu>
    </template>
  </VAppBar>
</template>

<script setup>
  import { computed } from "vue"
  import { useRouter } from "vue-router"

  import { ProductsPageName, SessionsPageName } from "~/assets"
  import { useSessionsStore, useThemeStore } from "~/stores"
  import { SessionsServices } from "~/services"

  const $theme = useThemeStore()
  const $sessions = useSessionsStore()

  const $router = useRouter()
  const $props = defineProps({
    simple: {
      type: Boolean,
      default: false,
    },
  })

  const $redirects = {
    login: () => $router.push({ name: SessionsPageName }),
  }

  const icon = computed(() =>
    $theme.current === "light" ? "light_mode" : "dark_mode"
  )

  const logout = async () => {
    const { data, status } = await SessionsServices.logout()

    if (status === 200) $sessions.currentUser = data
    if (!$sessions.currentUser?.id) return $redirects.login()
  }
</script>
