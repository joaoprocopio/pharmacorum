import { createApp } from "vue"

import { env } from "@/configs"
import { installPlugins } from "~/plugins"

import App from "./App.vue"

if (env.isDev && env.isMock) {
  // turn up mock server
}

const app = createApp(App)

installPlugins(app)

app.mount("#__vue")

export { app }
