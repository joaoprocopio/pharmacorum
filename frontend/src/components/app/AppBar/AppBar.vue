<template>
  <VAppBar :border="true" class="px-4" elevation="0">
    <template #prepend>
      <VBtn
        icon="local_pharmacy"
        color="primary"
        :disabled="$props.simple"
        :to="{ name: ProductsListPageName }" />
    </template>
    <template v-if="!$props.simple" #append>
      <VMenu>
        <template #activator="{ props }">
          <VBtn color="primary" icon="menu" v-bind="props"></VBtn>
        </template>
        <VList class="pa-2">
          <VListItemAction>
            <VBtn
              :icon="icon"
              color="primary"
              variant="text"
              @click="$theme.toggleTheme" />
          </VListItemAction>
          <VListItemAction>
            <VBtn
              icon="logout"
              color="primary"
              variant="text"
              @click="logout" />
          </VListItemAction>
        </VList>
      </VMenu>
    </template>
  </VAppBar>
</template>

<script setup>
  import { computed } from "vue"
  import { useRouter } from "vue-router"

  import { ProductsListPageName, UsersPageName } from "~/assets"
  import { useUsersStore, useThemeStore } from "~/stores"
  import { UsersServices } from "~/services"

  const $theme = useThemeStore()
  const $users = useUsersStore()

  const $router = useRouter()
  const $props = defineProps({
    simple: {
      type: Boolean,
      default: false,
    },
  })

  const $redirects = {
    login: () => $router.push({ name: UsersPageName }),
  }

  const icon = computed(() =>
    $theme.current === "light" ? "light_mode" : "dark_mode"
  )

  const logout = async () => {
    const { data, status } = await UsersServices.logout()

    if (status === 200) $users.currentUser = data
    if (!$users.currentUser?.id) return $redirects.login()
  }
</script>
