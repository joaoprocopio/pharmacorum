<template>
  <h1 class="font-weight-bold mb-8">Welcome to Pharmacorum!</h1>
  <VForm
    v-bind="$attrs"
    v-model="form"
    @submit.prevent="submit">
    <VTextField
      v-model="query"
      :readonly="$props.loading"
      :rules="[rules.required()]"
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
    <VBtn
      block
      color="primary"
      variant="text"
      @click="registration">
      Create account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { rules } from "~/utils"
  import { debounce } from "lodash"

  const timeout = ref(500)
  const $emit = defineEmits(["identify", "registration"])
  const $props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
  })

  const form = ref(false)
  const submit = debounce(() => {
    if (!form.value) return

    $emit("identify", query.value)
  }, timeout.value)
  const registration = debounce(() => {
    $emit("registration")
  }, timeout.value)

  const query = ref("")
</script>
