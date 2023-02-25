<template>
  <h1 class="font-weight-bold mb-8">Welcome to Pharmacorum!</h1>
  <VAlert
    prominent
    class="mb-4"
    variant="tonal"
    icon="error"
    color="error"
    text="We couldn't find a user with the given data. Please check if you entered the correct information or create a new account." />
  <VForm v-bind="$attrs" v-model="form" @submit.prevent="submit">
    <VTextField
      v-model="query"
      :readonly="$props.loading"
      :rules="[validators.required()]"
      class="mb-4"
      color="primary"
      label="Username or Email"
      variant="underlined"
      required />
    <VBtn
      class="mb-2"
      block
      :disabled="$props.loading"
      :loading="$props.loading"
      variant="flat"
      color="primary"
      type="submit">
      Continue
    </VBtn>
    <VBtn block color="primary" variant="text" @click="toRegister">
      Create account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { debounce } from "lodash"

  import { validators } from "~/utils"

  const $emit = defineEmits(["identify", "to-register"])
  const $props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
  })

  const timeout = ref(500)
  const query = ref("")
  const form = ref(false)

  const submit = debounce(() => {
    if (!form.value) return

    $emit("identify", query.value)
  }, timeout.value)

  const toRegister = debounce(() => {
    $emit("to-register")
  }, timeout.value)
</script>
