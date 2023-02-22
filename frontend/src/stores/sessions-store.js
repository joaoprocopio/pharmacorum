import { computed, reactive } from "vue"
import { defineStore } from "pinia"

export const useSessionsStore = defineStore("sessionsStore", () => {
  const findUser = reactive({})
  const currentUser = reactive({})

  const isAuthenticated = computed(() => currentUser?.is_authenticated ?? false)

  return { findUser, currentUser, isAuthenticated }
})
