<template>
  <!-- TODO: exibir os erros para alertar o usuário -->
  <!-- TODO: entender pq n funciona a prop loading em authentication -->
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <SessionsIdentification
      v-if="$props.step === SessionsSteps.IDENTIFICATION"
      :loading="loading"
      @identify="identify"
      @to-registration="$redirects.registration" />
    <SessionsAuthentication
      v-if="$props.step === SessionsSteps.AUTHENTICATION"
      :loading="loading"
      :find-user="$sessions.findUser"
      @authenticate="authenticate"
      @to-identification="$redirects.identification" />
    <SessionsRegistration
      v-if="$props.step === SessionsSteps.REGISTRATION"
      :loading="loading"
      @register="register"
      @to-identification="$redirects.identification" />
  </VResponsive>
</template>

<script setup>
  import { ref } from "vue"
  import { useRouter } from "vue-router"

  import {
    SessionsIdentification,
    SessionsAuthentication,
    SessionsRegistration,
  } from "~/components"
  import { SessionsSteps, SessionsPageName, ProductsPageName } from "~/assets"
  import { SessionsServices } from "~/services"
  import { useSessionsStore } from "~/stores"

  const $sessions = useSessionsStore()
  const $router = useRouter()
  const $props = defineProps({
    step: {
      type: String,
      default: () => SessionsSteps.IDENTIFICATION,
      validator: (step) => Object.values(SessionsSteps).includes(step),
    },
  })
  const $redirects = {
    identification: () => {
      $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsSteps.IDENTIFICATION,
        },
      })
    },
    authentication: () => {
      $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsSteps.AUTHENTICATION,
        },
      })
    },
    registration: () => {
      $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsSteps.REGISTRATION,
        },
      })
    },
    products: () => {
      $router.push({
        name: ProductsPageName,
      })
    },
  }

  const loading = ref(false)

  const identify = async (query) => {
    loading.value = true

    $sessions.findUser = await SessionsServices.identify(query).finally(() => {
      loading.value = false
    })

    if ($sessions.findUser?.id) $redirects.authentication()
  }
  const authenticate = async (password) => {
    loading.value = true

    $sessions.currentUser = await SessionsServices.login(
      $sessions.findUser?.id,
      password
    ).finally(() => {
      loading.value = false
    })

    if ($sessions.currentUser?.id) $redirects.products()
  }
  const register = async (user) => user
</script>
