import { ref } from "vue"

import { defineStore } from "pinia"

export const useToastStore = defineStore("toastStore", () => {
  const opened = ref(false)
  const vertical = ref(false)
  const multiLine = ref(false)
  const timeout = ref(5000)
  const message = ref("")
  const color = ref("primary")

  const $show = (options) => {
    opened.value = true
    vertical.value = options?.vertical || vertical.value
    multiLine.value = options?.multiLine || multiLine.value
    timeout.value = options?.timeout || timeout.value
    message.value = options?.message || message.value
    color.value = options?.color || color.value
  }

  return { opened, vertical, multiLine, timeout, message, color, $show }
})
