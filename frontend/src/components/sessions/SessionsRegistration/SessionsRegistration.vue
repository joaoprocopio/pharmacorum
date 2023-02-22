<template>
  <h1 class="font-weight-bold mb-8">Create your account</h1>
  <VForm
    v-bind="$attrs"
    v-model="form"
    @submit.prevent="submit">
    <VTextField
      v-model="user.username"
      :rules="[rules.required()]"
      :readonly="$props.loading"
      class="mb-2"
      color="primary"
      label="Username"
      variant="underlined" />
    <VTextField
      v-model="user.email"
      :rules="[rules.required(), rules.email(user.email)]"
      :readonly="$props.loading"
      class="mb-2"
      color="primary"
      label="Email"
      variant="underlined" />
    <VTextField
      v-model="user.first_name"
      :rules="[rules.required()]"
      :readonly="$props.loading"
      class="mb-2"
      color="primary"
      label="First name"
      variant="underlined" />
    <VTextField
      v-model="user.last_name"
      :rules="[rules.required()]"
      :readonly="$props.loading"
      class="mb-2"
      color="primary"
      label="Last name"
      variant="underlined" />
    <VTextField
      v-model="user.password"
      :rules="[rules.required(), rules.minimumLength(8)]"
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
      variant="flat"
      color="primary"
      type="submit"
      block>
      Register
    </VBtn>
    <VBtn
      block
      color="primary"
      variant="text"
      @click="toIdentification">
      I already have a account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref, reactive } from "vue"
  import { debounce } from "lodash"

  import { rules } from "~/utils"

  const $emit = defineEmits(["register", "to-identification"])
  const $props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
  })

  const timeout = ref(500)
  const show = ref(false)
  const form = ref(false)
  const user = reactive({})

  const submit = debounce(() => {
    if (!form.value) return

    $emit("register", user)
  }, timeout.value)

  const toIdentification = debounce(() => {
    $emit("to-identification")
  }, timeout.value)
</script>
