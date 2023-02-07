import { routerPlugin } from "./router"
import { vuetifyPlugin } from "./vuetify"
import { piniaPlugin } from "./pinia"
import { layoutPlugin } from "./layout"

const installPlugins = (app) => {
  app.use(vuetifyPlugin).use(piniaPlugin).use(routerPlugin).use(layoutPlugin)
}

export { installPlugins }
