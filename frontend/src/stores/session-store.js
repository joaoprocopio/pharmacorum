import { reactive, computed } from "vue"
import { defineStore } from "pinia"

export const useSessionStore = defineStore("sessionStore", () => {
  const currentUser = reactive({})

  const isAuthenticated = computed(() => currentUser?.is_authenticated ?? false)

  return { currentUser, isAuthenticated }
})
