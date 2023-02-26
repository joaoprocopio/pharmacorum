<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <SessionsIdentify
      v-if="$props.step === SessionsSteps.IDENTIFY"
      :alert="$alert.options"
      :loading="loading"
      @identify="identify"
      @to-register="$redirects.register"
      @hide-alert="$alert.$reset" />
    <SessionsLogin
      v-if="$props.step === SessionsSteps.LOGIN"
      :loading="loading"
      :find-user="$sessions.findUser"
      @authenticate="authenticate"
      @to-identify="$redirects.identify" />
    <SessionsRegister
      v-if="$props.step === SessionsSteps.REGISTER"
      :loading="loading"
      @register="register"
      @to-identify="$redirects.identify" />
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
  import { SessionsSteps, SessionsPageName, ProductsPageName } from "~/assets"
  import { SessionsServices } from "~/services"
  import { useSessionsStore, useAlertStore } from "~/stores"

  const $alert = useAlertStore()
  const $sessions = useSessionsStore()
  const $router = useRouter()
  const $props = defineProps({
    step: {
      type: String,
      default: () => SessionsSteps.IDENTIFY,
      validator: (step) => Object.values(SessionsSteps).includes(step),
    },
  })
  const $redirects = {
    identify: () =>
      $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsSteps.IDENTIFY,
        },
      }),
    login: () =>
      $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsSteps.LOGIN,
        },
      }),
    register: () =>
      $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsSteps.REGISTER,
        },
      }),
    products: () =>
      $router.push({
        name: ProductsPageName,
      }),
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
  const authenticate = async (password) => {
    loading.value = true

    const { data, status } = await SessionsServices.login(
      $sessions.findUser?.id,
      password
    ).finally(() => {
      loading.value = false
    })

    if (status === 200) $sessions.currentUser = data
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
    if ($sessions.currentUser?.id) return $redirects.products()
  }
</script>
