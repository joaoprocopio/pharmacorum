import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useSessionsStore = defineStore("sessionsStore", () => {
  const findUser = ref({})
  const currentUser = ref({})

  const isAuthenticated = computed(
    () => currentUser.value.is_authenticated ?? false
  )
  const hasFindUser = computed(() => Object.entries(findUser.value).length > 0)

  return { findUser, currentUser, isAuthenticated, hasFindUser }
})
