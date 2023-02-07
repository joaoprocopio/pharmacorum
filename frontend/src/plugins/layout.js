import { DefaultLayout } from "~/layouts"

const layoutPlugin = {
  install(Vue) {
    Vue.component("DefaultLayout", DefaultLayout)
  },
}

export { layoutPlugin }
