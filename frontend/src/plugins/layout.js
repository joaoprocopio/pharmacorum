import { DefaultLayout } from "~/layouts"

export const layoutPlugin = {
  install(Vue) {
    Vue.component("DefaultLayout", DefaultLayout)
  },
}
