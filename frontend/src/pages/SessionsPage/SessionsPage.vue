<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <SessionsIdentify
      v-if="$props.step === SessionsStepsEnum.IDENTIFY"
      :loading="loading"
      :show-alert="$alert.options.show"
      @identify="identify"
      @to-register="$redirects.register"
      @hide-alert="$alert.$reset" />
    <SessionsLogin
      v-if="$props.step === SessionsStepsEnum.LOGIN"
      :loading="loading"
      :show-alert="$alert.options.show"
      :find-user="$sessions.findUser"
      @login="login"
      @to-identify="$redirects.identify"
      @hide-alert="$alert.$reset" />
    <SessionsRegister
      v-if="$props.step === SessionsStepsEnum.REGISTER"
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

  import {
    SessionsIdentify,
    SessionsLogin,
    SessionsRegister,
  } from "~/components"
  import {
    SessionsStepsEnum,
    SessionsPageName,
    ProductsPageName,
  } from "~/assets"
  import { SessionsServices } from "~/services"
  import { useSessionsStore, useAlertStore } from "~/stores"

  const $alert = useAlertStore()
  const $sessions = useSessionsStore()
  const $router = useRouter()
  const $props = defineProps({
    step: {
      type: String,
      default: () => SessionsStepsEnum.IDENTIFY,
      validator: (step) => Object.values(SessionsStepsEnum).includes(step),
    },
  })
  const $redirects = {
    identify: async () => {
      return $router
        .push({
          name: SessionsPageName,
          params: {
            step: SessionsStepsEnum.IDENTIFY,
          },
        })
        .finally(() => {
          $sessions.findUser = {}
        })
    },
    login: () => {
      return $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsStepsEnum.LOGIN,
        },
      })
    },
    register: () => {
      return $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsStepsEnum.REGISTER,
        },
      })
    },
    products: () => {
      return $router.push({
        name: ProductsPageName,
      })
    },
  }

  const loading = ref(false)

  const identify = async (query) => {
    loading.value = true

    const { data, status } = await SessionsServices.identify(query).finally(
      () => {
        loading.value = false
      }
    )

    if (status === 200) $sessions.findUser = data
    if (status === 404)
      $alert.show({
        color: "error",
        icon: "error",
        text: "Sorry, we couldn't find a user with the given data. Please check if you entered the correct information or create a new account.",
      })
    if ($sessions.findUser?.id) return $redirects.login()
  }
  const login = async (password) => {
    loading.value = true

    const { data, status } = await SessionsServices.login(
      $sessions.findUser?.id,
      password
    ).finally(() => {
      loading.value = false
    })

    if (status === 200) $sessions.currentUser = data
    if (status === 404)
      $alert.show({
        color: "error",
        icon: "error",
        text: "This password is incorrect. Please check if you entered the correct password or contact the administration to help.",
      })
    if ($sessions.currentUser?.id) return $redirects.products()
  }
  const register = async (user) => {
    loading.value = true

    const { data, status } = await SessionsServices.register(user).finally(
      () => {
        loading.value = false
      }
    )

    if (status === 200) $sessions.currentUser = data
    if (status === 409)
      $alert.show({
        color: "error",
        icon: "error",
        text: "Sorry, but this username or email is already taken. Please try again with another data.",
      })
    if ($sessions.currentUser?.id) return $redirects.products()
  }
</script>
