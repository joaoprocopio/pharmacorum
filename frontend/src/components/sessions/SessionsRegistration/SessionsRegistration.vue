<template>
  <h1 class="font-weight-bold mb-8">Create your account</h1>
  <VForm @submit.prevent="() => {}">
    <VTextField
      class="mb-2"
      color="primary"
      label="First name"
      variant="outlined" />
    <VTextField
      class="mb-2"
      color="primary"
      label="Last name"
      variant="outlined" />
    <VTextField
      class="mb-2"
      color="primary"
      label="Email"
      variant="outlined" />
    <VTextField
      class="mb-2"
      color="primary"
      label="Password"
      type="password"
      variant="outlined" />
    <VBtn
      class="mb-2"
      block
      variant="flat"
      color="primary"
      type="submit">
      Register
    </VBtn>
    <VBtn
      block
      color="primary"
      variant="text">
      I already have a account
    </VBtn>
  </VForm>
</template>
