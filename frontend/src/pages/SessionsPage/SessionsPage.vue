<template>
  <VResponsive
    class="mx-auto py-12 px-8"
    max-width="600">
    <SessionsIdentification v-if="step === SessionsSteps.IDENTIFICATION" />
    <SessionsAuthentication v-if="step === SessionsSteps.AUTHENTICATION" />
    <SessionsRegistration v-if="step === SessionsSteps.REGISTRATION" />
  </VResponsive>
</template>

<script setup>
  import {
    SessionsIdentification,
    SessionsAuthentication,
    SessionsRegistration,
  } from "~/components"
  import { SessionsSteps } from "~/assets"

  const s = {
    1: "identification",
    2: "authentication",
    3: "registration",
  }
  const step = s[3]
</script>
