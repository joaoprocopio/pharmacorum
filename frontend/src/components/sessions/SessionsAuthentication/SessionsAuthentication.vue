<template>
  <VResponsive
    class="mb-8"
    content-class="d-flex flex-column align-center justify-space-between ">
    <VImg
      cover
      class="rounded-circle mb-4"
      src="https://loremflickr.com/100/100/cat"
      width="144" />
    <h1 class="text-center font-weight-bold">Username</h1>
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
    <VBtn
      color="primary"
      variant="text"
      block>
      Enter with another account
    </VBtn>
  </VForm>
</template>
