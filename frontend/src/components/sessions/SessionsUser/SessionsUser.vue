<template>
  <h1 class="font-weight-bold mb-8">Welcome to Pharmacorum!</h1>
  <VForm @submit.prevent="() => {}">
    <VTextField
      color="primary"
      label="Username or Email"
      variant="underlined" />
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
