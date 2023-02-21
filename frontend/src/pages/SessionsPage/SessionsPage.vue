<template>
  <VResponsive
    class="mx-auto py-12 px-8"
    max-width="600">
    <SessionsIdentification
      :loading="loading"
      v-if="$props.step === SessionsSteps.IDENTIFICATION" />
    <SessionsAuthentication
      v-if="$props.step === SessionsSteps.AUTHENTICATION" />
    <SessionsRegistration v-if="$props.step === SessionsSteps.REGISTRATION" />
  </VResponsive>
</template>

<script setup>
  import { ref } from "vue"
  import {
    SessionsIdentification,
    SessionsAuthentication,
    SessionsRegistration,
  } from "~/components"
  import { SessionsSteps } from "~/assets"

  const $props = defineProps({
    step: {
      type: String,
      required: true,
      validator: (step) => Object.values(SessionsSteps).includes(step),
    },
  })

  const loading = ref(false)
</script>
