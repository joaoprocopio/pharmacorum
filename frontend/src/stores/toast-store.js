import { reactive } from "vue"

import { defineStore } from "pinia"

export const useToastStore = defineStore("toastStore", () => {
  const options = reactive({
    show: false,
    vertical: false,
    multiLine: false,
    timeout: 5000,
    message: "",
    color: "primary",
  })

  const show = (given) => {
    options.show = true
    options.vertical = given?.vertical || options.vertical
    options.multiLine = given?.multiLine || options.multiLine
    options.timeout = given?.timeout || options.timeout
    options.message = given?.message || options.message
    options.color = given?.color || options.color

    setTimeout(() => {
      $reset()
    }, options.timeout)
  }

  const $reset = () => {
    options.show = false
    options.vertical = false
    options.multiLine = false
    options.timeout = 5000
    options.message = ""
    options.color = "primary"
  }

  return { options, show, $reset }
})
