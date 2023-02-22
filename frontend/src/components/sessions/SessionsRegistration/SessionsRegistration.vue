<template>
  <h1 class="font-weight-bold mb-8">Create your account</h1>
  <VForm @submit.prevent="() => {}">
    <VTextField
      class="mb-2"
      color="primary"
      label="Username"
      variant="underlined" />
    <VTextField
      class="mb-2"
      color="primary"
      label="Email"
      variant="underlined" />
    <VTextField
      class="mb-2"
      color="primary"
      label="First name"
      variant="underlined" />
    <VTextField
      class="mb-2"
      color="primary"
      label="Last name"
      variant="underlined" />
    <VTextField
      class="mb-2"
      color="primary"
      label="Password"
      type="password"
      variant="underlined" />
    <VBtn
      class="mb-2"
      block
      variant="flat"
      color="primary"
      type="submit">
      Register
    </VBtn>
    <VBtn
      block
      color="primary"
      variant="text"
      @click="identification">
      I already have a account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { debounce } from "lodash"
  import { ref } from "vue"

  const timeout = ref(500)
  const $emit = defineEmits(["identification"])

  const identification = debounce(() => {
    $emit("identification")
  }, timeout.value)
</script>
