import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"

export const useSearchStore = defineStore("search", () => {
  const params = reactive({
    page: 1,
    perPage: 30,
  })

  const count = ref(1)
  const products = ref({})

  const pagesAvailable = computed(() => Math.ceil(count.value / params.perPage))

  return { params, pagesAvailable, count, products }
})
