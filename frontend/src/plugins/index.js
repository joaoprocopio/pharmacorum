import { routerPlugin } from "./router-plugin"
import { vuetifyPlugin } from "./vuetify-plugin"
import { piniaPlugin } from "./pinia-plugin"
import { layoutPlugin } from "./layout-plugin"

export const installPlugins = (app) => {
  app.use(vuetifyPlugin)
  app.use(piniaPlugin)
  app.use(routerPlugin)
  app.use(layoutPlugin)
}
