import { DefaultLayout } from "~/layouts"
import { DefaultLayoutName } from "~/assets"

export const layoutPlugin = {
  install(Vue) {
    Vue.component(DefaultLayoutName, DefaultLayout)
  },
}
