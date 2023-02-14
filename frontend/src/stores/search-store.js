import { defineStore } from "pinia"
import { computed, reactive } from "vue"

export const useSearchStore = defineStore("search", () => {
  const params = reactive({
    page: 1,
    perPage: 30,
  })

  const pagesAvailable = computed(() => null)

  return { params, pagesAvailable }
})
