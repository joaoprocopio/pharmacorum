<template>
  <VResponsive
    class="mx-auto py-12 px-8"
    max-width="600">
    <h1 class="font-weight-bold mb-8">Welcome to Pharmacorum!</h1>
    <VForm @submit.prevent="() => {}">
      <VTextField
        label="Username or Email"
        variant="underlined"
        density="comfortable" />
      <VBtn
        class="mb-4"
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
  </VResponsive>
</template>
