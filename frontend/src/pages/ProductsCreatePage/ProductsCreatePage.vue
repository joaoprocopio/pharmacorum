<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <h1 class="mb-8">Create your product</h1>
    <AppAlert />
    <VForm
      v-bind="$attrs"
      v-model="form"
      :readonly="loading"
      @input="hideAlert"
      @submit.prevent="submit">
      <VTextField
        v-model="product.title"
        :rules="[validators.required()]"
        class="mb-2"
        color="primary"
        label="Title"
        variant="underlined" />
      <VSelect
        v-model="product.types"
        :rules="[validators.required()]"
        class="mb-2"
        color="primary"
        label="Types"
        variant="underlined"
        multiple
        :items="Object.values(ProductTypesEnum)" />
      <VAutocomplete
        v-model="product.brand_id"
        v-model:search="query"
        :rules="[validators.required()]"
        :items="brands"
        item-value="id"
        class="mb-2"
        color="primary"
        label="Brand"
        variant="underlined"
        hide-no-data
        @update:search="fetchBrands" />
      <VTextarea
        v-model="product.description"
        :rules="[validators.required()]"
        class="mb-2"
        color="primary"
        label="Description"
        variant="underlined" />
      <VTextField
        v-model="product.quantity"
        :rules="[validators.required()]"
        class="mb-2"
        color="primary"
        label="Quantity"
        type="number"
        variant="underlined" />
      <VTextField
        v-model="product.price"
        :rules="[validators.required()]"
        class="mb-2"
        color="primary"
        label="Price"
        type="number"
        variant="underlined" />
      <VBtn
        :disabled="loading"
        :loading="loading"
        class="mb-2"
        block
        type="submit"
        color="primary"
        variant="flat">
        Create
      </VBtn>
      <VBtn block variant="text" color="primary" @click="$router.back">
        Go back
      </VBtn>
    </VForm>
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"
  import { debounce } from "lodash"

  import { AppAlert } from "~/components"
  import { useAlertStore } from "~/stores"
  import { BrandsServices, ProductsServices } from "~/services"
  import { validators } from "~/utils"
  import { ProductTypesEnum } from "~/assets"

  const $alert = useAlertStore()

  const loading = ref(false)
  const form = ref(false)
  const brands = ref([])
  const product = ref({})
  const query = ref("")
  const timeout = ref(500)

  const submit = debounce(async () => {
    if (!form.value) return

    loading.value = true

    const { status } = await ProductsServices.createProduct(
      product.value
    ).finally(() => {
      loading.value = false
    })

    if (status === 200) {
      $alert.show({
        color: "success",
        icon: "done",
        text: "Your product was successfully created.",
      })
    }
  }, timeout.value)

  const fetchBrands = debounce(async () => {
    const { data, status } = await BrandsServices.getBrands(query.value)

    if (status === 200) brands.value = data.brands
  }, timeout.value)

  const hideAlert = debounce(() => {
    $alert.$reset()
  }, timeout.value)

  onMounted(() => fetchBrands())
</script>
