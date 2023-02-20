import { ref } from "vue"
import { defineStore } from "pinia"

export const useThemeStore = defineStore("themeStore", () => {
  const theme = ref("light")

  const toggleTheme = () =>
    (theme.value = theme.value === "light" ? "dark" : "light")

  return { theme, toggleTheme }
})
