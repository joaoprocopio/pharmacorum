import { ref } from "vue"
import { defineStore } from "pinia"

export const useThemeStore = defineStore("themeStore", () => {
  const current = ref("dark")

  const toggleTheme = () =>
    (current.value = current.value === "light" ? "dark" : "light")

  return { current, toggleTheme }
})
