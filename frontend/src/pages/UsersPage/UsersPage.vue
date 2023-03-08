<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <UsersIdentify
      v-if="$props.step === UsersStepsEnum.IDENTIFY"
      :loading="loading"
      :show-alert="$alert.options.show"
      @identify="identify"
      @to-register="$redirects.register"
      @hide-alert="$alert.$reset" />
    <UsersLogin
      v-if="$props.step === UsersStepsEnum.LOGIN"
      :loading="loading"
      :show-alert="$alert.options.show"
      :find-user="$users.findUser"
      @login="login"
      @to-identify="$redirects.identify"
      @hide-alert="$alert.$reset" />
    <UsersRegister
      v-if="$props.step === UsersStepsEnum.REGISTER"
      :loading="loading"
      :show-alert="$alert.options.show"
      @register="register"
      @to-identify="$redirects.identify"
      @hide-alert="$alert.$reset" />
  </VResponsive>
</template>

<script setup>
  import { ref } from "vue"
  import { useRouter } from "vue-router"

  import { UsersIdentify, UsersLogin, UsersRegister } from "~/components"
  import { UsersStepsEnum, UsersPageName, ProductsListPageName } from "~/assets"
  import { UsersServices } from "~/services"
  import { useUsersStore, useAlertStore } from "~/stores"

  const $alert = useAlertStore()
  const $users = useUsersStore()
  const $router = useRouter()
  const $props = defineProps({
    step: {
      type: String,
      default: () => UsersStepsEnum.IDENTIFY,
      validator: (step) => Object.values(UsersStepsEnum).includes(step),
    },
  })
  const $redirects = {
    identify: async () => {
      return $router
        .push({
          name: UsersPageName,
          params: {
            step: UsersStepsEnum.IDENTIFY,
          },
        })
        .finally(() => {
          $users.findUser = {}
        })
    },
    login: () => {
      return $router.push({
        name: UsersPageName,
        params: {
          step: UsersStepsEnum.LOGIN,
        },
      })
    },
    register: () => {
      return $router.push({
        name: UsersPageName,
        params: {
          step: UsersStepsEnum.REGISTER,
        },
      })
    },
    products: () => {
      return $router.push({
        name: ProductsListPageName,
      })
    },
  }

  const loading = ref(false)

  const identify = async (query) => {
    loading.value = true

    const { data, status } = await UsersServices.identify(query).finally(() => {
      loading.value = false
    })

    if (status === 200) $users.findUser = data
    if (status === 404)
      $alert.show({
        color: "error",
        icon: "error",
        text: "Sorry, we couldn't find a user with the given data. Please check if you entered the correct information or create a new account.",
      })
    if ($users.findUser?.id) return $redirects.login()
  }
  const login = async (password) => {
    loading.value = true

    const { data, status } = await UsersServices.login(
      $users.findUser?.id,
      password
    ).finally(() => {
      loading.value = false
    })

    if (status === 200) $users.currentUser = data
    if (status === 404)
      $alert.show({
        color: "error",
        icon: "error",
        text: "This password is incorrect. Please check if you entered the correct password or contact the administration to help.",
      })
    if ($users.currentUser?.id) return $redirects.products()
  }
  const register = async (user) => {
    loading.value = true

    const { data, status } = await UsersServices.register(user).finally(() => {
      loading.value = false
    })

    if (status === 200) $users.currentUser = data
    if (status === 409)
      $alert.show({
        color: "error",
        icon: "error",
        text: "Sorry, but this username or email is already taken. Please try again with another data.",
      })
    if ($users.currentUser?.id) return $redirects.products()
  }
</script>
