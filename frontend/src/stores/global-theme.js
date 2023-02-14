import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useGlobalThemeStore = defineStore("globalTheme", () => {
  const theme = ref("dark")

  const current = computed(() => theme.value)

  const toggleTheme = () =>
    (theme.value = theme.value === "light" ? "dark" : "light")

  return { theme, current, toggleTheme }
})
