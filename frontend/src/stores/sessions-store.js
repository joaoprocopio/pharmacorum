import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useSessionsStore = defineStore("sessionsStore", () => {
  const currentUser = ref({
    id: 1,
  })

  const isAuthenticated = computed(
    () => currentUser.value?.is_authenticated ?? false
  )

  return { currentUser, isAuthenticated }
})
