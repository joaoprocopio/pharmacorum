import { reactive, computed } from "vue"
import { defineStore } from "pinia"

export const useSessionsStore = defineStore("sessionsStore", () => {
  const currentUser = reactive({})

  const isAuthenticated = computed(() => currentUser?.is_authenticated ?? false)

  return { currentUser, isAuthenticated }
})
