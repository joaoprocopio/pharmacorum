<template>
  <h1 class="mb-8">Create your account</h1>
  <AppAlert />
  <VForm
    v-bind="$attrs"
    v-model="form"
    :readonly="$props.loading"
    @input="hideAlert"
    @submit.prevent="submit">
    <VTextField
      v-model="user.username"
      :rules="[validators.required(), validators.username()]"
      class="mb-2"
      color="primary"
      label="Username"
      variant="underlined" />
    <VTextField
      v-model="user.email"
      :rules="[validators.required(), validators.email()]"
      class="mb-2"
      color="primary"
      label="Email"
      variant="underlined" />
    <VTextField
      v-model="user.first_name"
      :rules="[validators.required()]"
      class="mb-2"
      color="primary"
      label="First name"
      variant="underlined" />
    <VTextField
      v-model="user.last_name"
      :rules="[validators.required()]"
      class="mb-2"
      color="primary"
      label="Last name"
      variant="underlined" />
    <VTextField
      v-model="user.password"
      :rules="[
        validators.required(),
        validators.notEntirelyNumeric(),
        validators.minimumLength(8),
      ]"
      :append-inner-icon="show ? 'visibility' : 'visibility_off'"
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
      variant="flat"
      color="primary"
      type="submit"
      block>
      Register
    </VBtn>
    <VBtn block color="primary" variant="text" @click="toIdentify">
      I already have a account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { debounce } from "lodash"

  import { AppAlert } from "~/components"
  import { validators } from "~/utils"

  const $emit = defineEmits(["register", "to-identify", "hide-alert"])
  const $props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
    showAlert: {
      type: Boolean,
      required: true,
    },
  })

  const timeout = ref(500)
  const show = ref(false)
  const form = ref(false)
  const user = ref({})

  const submit = debounce(() => {
    if (!form.value) return

    $emit("register", user.value)
  }, timeout.value)
  const hideAlert = debounce(() => {
    if (!$props.showAlert) return

    $emit("hide-alert")
  }, timeout.value)
  const toIdentify = debounce(() => {
    $emit("to-identify")
  }, timeout.value)
</script>
