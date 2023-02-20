<template>
  <h1 class="font-weight-bold mb-8">Welcome to Pharmacorum!</h1>
  <VForm @submit.prevent="() => {}">
    <VTextField
      class="mb-4"
      color="primary"
      label="Username or Email"
      variant="outlined" />
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
