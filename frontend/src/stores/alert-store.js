import { reactive } from "vue"

import { defineStore } from "pinia"

export const useAlertStore = defineStore("alertStore", () => {
  const options = reactive({
    show: false,
    icon: false,
    text: "",
    color: "",
  })

  const show = (given) => {
    options.show = true
    options.icon = given?.icon || options.icon
    options.text = given?.text || options.text
    options.color = given?.color || options.color
  }

  const $reset = () => {
    options.show = false
    options.icon = false
    options.text = ""
    options.color = ""
  }

  return { options, show, $reset }
})
