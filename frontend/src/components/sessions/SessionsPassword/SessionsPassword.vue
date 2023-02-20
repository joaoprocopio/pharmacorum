<template>
  <VResponsive
    class="mb-8"
    content-class="d-flex flex-column align-center justify-space-between ">
    <VImg
      cover
      class="rounded-circle mb-4"
      src="https://loremflickr.com/100/100/cat"
      width="144" />
    <h1 class="text-center text-h5 font-weight-bold">Username</h1>
    <VBtn
      size="small"
      color="primary"
      variant="text">
      Enter with another account
    </VBtn>
  </VResponsive>
  <VForm @submit.prevent="() => {}">
    <VTextField
      color="primary"
      type="password"
      variant="outlined"
      label="Password" />
    <VBtn
      class="mb-2"
      color="primary"
      type="submit"
      variant="flat"
      block>
      Login
    </VBtn>
  </VForm>
</template>
