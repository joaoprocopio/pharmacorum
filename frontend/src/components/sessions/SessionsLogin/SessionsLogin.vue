<template>
  <VResponsive
    class="mb-8"
    content-class="d-flex flex-column align-center justify-space-between ">
    <VIcon size="128" color="primary" icon="person" />
    <h1
      class="text-center font-weight-bold text-capitalize"
      v-text="findUser?.first_name" />
  </VResponsive>
  <VForm v-bind="$attrs" v-model="form" @submit.prevent="submit">
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
    <VBtn color="primary" variant="text" block @click="toIdentify">
      Enter with another account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { debounce, has } from "lodash"

  import { validators } from "~/utils"

  const $emit = defineEmits(["authenticate", "to-identify"])
  const $props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
    findUser: {
      type: Object,
      validator: (user) => has(user, "id") && has(user, "first_name"),
      required: true,
    },
  })

  const form = ref(false)
  const show = ref(false)
  const timeout = ref(500)
  const password = ref("")

  const toIdentify = debounce(() => {
    $emit("to-identify")
  }, timeout.value)
  const submit = debounce(() => {
    if (!form.value) return

    $emit("authenticate", password.value)
  }, timeout.value)
</script>
