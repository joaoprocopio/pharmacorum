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
      @click="toRegistration">
      Create account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { debounce } from "lodash"

  import { rules } from "~/utils"

  const $emit = defineEmits(["identify", "to-registration"])
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

  const toRegistration = debounce(() => {
    $emit("to-registration")
  }, timeout.value)
</script>
