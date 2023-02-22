import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useSessionsStore = defineStore("sessionsStore", () => {
  const findUser = ref(null)
  const currentUser = ref(null)

  const isAuthenticated = computed(
    () => currentUser.value.is_authenticated ?? false
  )

  return { findUser, currentUser, isAuthenticated }
})
