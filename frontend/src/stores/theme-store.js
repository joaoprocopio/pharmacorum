import { ref } from "vue"
import { defineStore } from "pinia"

export const useThemeStore = defineStore("themeStore", () => {
  const theme = ref("dark")

  const toggleTheme = () =>
    (theme.value = theme.value === "dark" ? "light" : "dark")

  return { theme, toggleTheme }
})
