import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useUsersStore = defineStore("usersStore", () => {
  const findUser = ref({})
  const currentUser = ref({})

  const isAuthenticated = computed(
    () => currentUser.value?.is_authenticated ?? false
  )

  return { findUser, currentUser, isAuthenticated }
})
