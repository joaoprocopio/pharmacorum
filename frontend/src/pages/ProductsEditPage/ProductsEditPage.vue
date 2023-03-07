<template>
  <VResponsive class="mx-auto py-8 px-8" max-width="600">
    <VCard v-if="!initializing" border class="mb-8 px-6 py-4" elevation="0">
      <h1 class="mb-8">Edit this product</h1>
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
        <!-- TODO: o produto edita bonitinho, mas ta faltando corrigir a exibição da marca que tá confusa -->
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
          Edit
        </VBtn>
        <VBtn
          block
          variant="text"
          color="primary"
          :to="{ name: ProductsListPageName }">
          Go back
        </VBtn>
      </VForm>
    </VCard>
  </VResponsive>
</template>

<script setup>
  import { ref, onMounted } from "vue"
  import { debounce } from "lodash"

  import { validators } from "~/utils"
  import { useAlertStore } from "~/stores"
  import { ProductsServices, BrandsServices } from "~/services"
  import { AppAlert } from "~/components"
  import { ProductTypesEnum, ProductsListPageName } from "~/assets"

  const $alert = useAlertStore()
  const $props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })

  const form = ref(false)
  const loading = ref(false)
  const initializing = ref(true)
  const brands = ref([])
  const product = ref({})
  const query = ref("")
  const timeout = ref(500)

  const submit = debounce(async () => {
    if (!form.value) return

    loading.value = true

    const { status } = await ProductsServices.editProduct(
      product.value
    ).finally(() => {
      loading.value = false
    })

    if (status === 200) {
      $alert.show({
        color: "success",
        icon: "done",
        text: "Your product was successfully edited.",
      })
    }
  }, timeout.value)

  const fetch = async () => {
    initializing.value = true

    const { data, status } = await ProductsServices.getProductById(
      $props.id
    ).finally(() => {
      initializing.value = false
    })

    if (status === 200) product.value = data
  }

  const fetchBrands = debounce(async () => {
    const { data, status } = await BrandsServices.getBrands(query.value)

    if (status === 200) brands.value = data.brands
  }, timeout.value)

  const hideAlert = debounce(() => {
    $alert.$reset()
  }, timeout.value)

  onMounted(() => {
    fetchBrands()
    fetch()
  })
</script>
