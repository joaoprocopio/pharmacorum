import { reactive } from "vue"

import { defineStore } from "pinia"

export const useAlertStore = defineStore("alertStore", () => {
  const options = reactive({
    show: false,
    text: "",
    icon: "",
    color: "",
  })

  const show = (given) => {
    options.show = true
    options.text = given?.text || options.text
    options.text = given?.text || options.text
    options.color = given?.color || options.color
  }

  const $reset = () => {
    options.show = false
    options.text = ""
    options.icon = ""
    options.color = ""
  }

  return { options, show, $reset }
})
