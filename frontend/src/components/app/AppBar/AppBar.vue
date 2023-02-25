<template>
  <VAppBar :border="true" class="px-4" elevation="0">
    <template #prepend>
      <VBtn
        icon="local_hospital"
        color="primary"
        :disabled="$route.name === SessionsPageName"
        :to="{ name: ProductsPageName }" />
    </template>
    <template v-if="!$route?.meta?.layout?.simple" #append>
      <VMenu>
        <template #activator="{ props }">
          <VBtn color="primary" icon="menu" v-bind="props"></VBtn>
        </template>
        <VList class="pa-2">
          <VListItemAction>
            <VBtn
              :icon="$theme.current === 'light' ? 'light_mode' : 'dark_mode'"
              color="primary"
              @click="$theme.toggleTheme" />
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
  import { useRouter } from "vue-router"

  import { ProductsPageName, SessionsPageName } from "~/assets"
  import { useSessionsStore, useThemeStore } from "~/stores"
  import { SessionsServices } from "~/services"

  const $router = useRouter()
  const $theme = useThemeStore()
  const $sessions = useSessionsStore()
  const $redirects = {
    login: () => $router.push({ name: SessionsPageName }),
  }

  const logout = async () => {
    $sessions.currentUser = await SessionsServices.logout()

    if (!$sessions.currentUser?.id) return $redirects.login()
  }
</script>
