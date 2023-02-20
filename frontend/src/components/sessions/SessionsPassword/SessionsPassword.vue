<template>
  <h1 class="text-center font-weight-bold mb-8">Username</h1>
  <VForm @submit.prevent="() => {}">
    <VTextField
      color="primary"
      label="Password"
      variant="underlined" />
    <VBtn
      class="mb-2"
      block
      variant="flat"
      color="primary"
      type="submit">
      Login
    </VBtn>
  </VForm>
</template>
