<template>
  <VResponsive
    class="mb-8"
    content-class="d-flex flex-column align-center justify-space-between ">
    <VImg
      cover
      class="rounded-circle mb-4"
      src="https://loremflickr.com/100/100/cat"
      width="144" />
    <h1 class="text-center font-weight-bold">Username</h1>
  </VResponsive>
  <VForm
    v-bind="$attrs"
    v-model="form"
    @submit.prevent="submit">
    <VTextField
      v-model="password"
      :rules="[validators.required(), validators.minimumLength(8)]"
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
    <VBtn
      color="primary"
      variant="text"
      block
      @click="toIdentification">
      Enter with another account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { debounce } from "lodash"

  import { validators } from "~/utils"

  const $emit = defineEmits(["authenticate", "to-identification"])
  const $props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
  })

  const form = ref(false)
  const show = ref(false)
  const timeout = ref(500)
  const password = ref("")

  const toIdentification = debounce(() => {
    $emit("to-identification")
  }, timeout.value)
  const submit = debounce(() => {
    if (!form.value) return

    $emit("authenticate", password.value)
  }, timeout.value)
</script>
