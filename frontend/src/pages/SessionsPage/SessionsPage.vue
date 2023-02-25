<template>
  <!-- TODO: exibir os erros para alertar o usuário -->
  <!-- TODO: terminar a página de registro -->
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <SessionsIdentify
      v-if="$props.step === SessionsSteps.IDENTIFY"
      :loading="loading"
      @identify="identify"
      @to-register="$redirects.register" />
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
  import { useSessionsStore } from "~/stores"

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

    $sessions.findUser = await SessionsServices.identify(query).finally(() => {
      loading.value = false
    })

    if ($sessions.findUser?.id) return $redirects.login()
  }
  const authenticate = async (password) => {
    loading.value = true

    $sessions.currentUser = await SessionsServices.login(
      $sessions.findUser?.id,
      password
    ).finally(() => {
      loading.value = false
    })

    if ($sessions.currentUser?.id) return $redirects.products()
  }
  const register = async (user) => {
    loading.value = true

    $sessions.currentUser = await SessionsServices.register(user).finally(
      () => {
        loading.value = false
      }
    )

    if ($sessions.currentUser?.id) return $redirects.products()
  }
</script>
