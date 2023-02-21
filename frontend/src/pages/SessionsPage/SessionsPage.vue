<template>
  <VResponsive
    class="mx-auto py-12 px-8"
    max-width="600">
    <SessionsIdentification
      :loading="loading"
      @registration="$redirects.registration"
      v-if="$props.step === SessionsSteps.IDENTIFICATION" />
    <SessionsAuthentication
      v-if="$props.step === SessionsSteps.AUTHENTICATION" />
    <SessionsRegistration v-if="$props.step === SessionsSteps.REGISTRATION" />
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
  import { SessionsSteps, SessionsPageName } from "~/assets"

  const $router = useRouter()
  const $props = defineProps({
    step: {
      type: String,
      required: true,
      validator: (step) => Object.values(SessionsSteps).includes(step),
    },
  })
  const $redirects = {
    registration: () =>
      $router.push({
        name: SessionsPageName,
        params: {
          step: SessionsSteps.REGISTRATION,
        },
      }),
  }

  const loading = ref(false)
</script>
