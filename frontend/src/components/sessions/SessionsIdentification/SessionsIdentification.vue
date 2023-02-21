<template>
  <h1 class="font-weight-bold mb-8">Welcome to Pharmacorum!</h1>
  <VForm
    v-model="form"
    @submit.prevent="submit">
    <VTextField
      v-model="query"
      :rules="[rules.required()]"
      class="mb-4"
      color="primary"
      label="Username or Email"
      variant="outlined"
      required />
    <VBtn
      class="mb-2"
      block
      variant="flat"
      color="primary"
      type="submit">
      Continue
    </VBtn>
    <VBtn
      block
      color="primary"
      variant="text">
      Create account
    </VBtn>
  </VForm>
</template>

<script setup>
  import { ref } from "vue"
  import { rules } from "~/utils"

  // Form
  const submit = () => {
    if (!form.value) return

    console.log(query.value)
  }
  const form = ref(false)

  // Query input
  const query = ref("")
</script>
