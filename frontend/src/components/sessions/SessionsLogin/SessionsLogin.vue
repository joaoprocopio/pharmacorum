<template>
  <VResponsive
    class="mb-8"
    content-class="d-flex flex-column align-center justify-space-between">
    <VIcon size="64" color="primary" icon="person" />
    <h1
      class="text-center font-weight-bold text-capitalize"
      v-text="findUser.first_name" />
  </VResponsive>
  <AppAlert />
  <VForm
    v-bind="$attrs"
    v-model="form"
    @input="hideAlert"
    @submit.prevent="submit">
    <VTextField
      v-model="password"
      :rules="[validators.required()]"
      :append-inner-icon="show ? 'visibility' : 'visibility_off'"
      :readonly="$props.loading"
      :type="show ? 'text' : 'password'"
      class="mb-2"
      color="primary"
      label="Password"
      variant="underlined"
      @click:append-inner="show = !show" />
    <VBtn
      :disabled="$props.loading"
      :loading="$props.loading"
      class="mb-2"
      color="primary"
      type="submit"
      variant="flat"
      block>
      Login
    </VBtn>
    <VBtn color="primary" variant="text" block @click="toIdentify">
      Enter with another account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { debounce } from "lodash"

  import { AppAlert } from "~/components"
  import { validators } from "~/utils"

  const $emit = defineEmits(["login", "to-identify", "hide-alert"])
  const $props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
    findUser: {
      type: Object,
      required: true,
    },
    showAlert: {
      type: Boolean,
      required: true,
    },
  })

  const form = ref(false)
  const show = ref(false)
  const timeout = ref(500)
  const password = ref("")

  const submit = debounce(() => {
    if (!form.value) return

    $emit("login", password.value)
  }, timeout.value)
  const hideAlert = debounce(() => {
    if (!$props.showAlert) return

    $emit("hide-alert")
  }, timeout.value)
  const toIdentify = debounce(() => {
    $emit("to-identify")
  }, timeout.value)
</script>
