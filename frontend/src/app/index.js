import { createApp } from "vue"

import { env } from "@/configs"
import { mockServer } from "~/mocks"
import { installPlugins } from "~/plugins"

import App from "./App.vue"

if (env.isDev && env.isMock) {
  mockServer()
}

const app = createApp(App)

installPlugins(app)

app.mount("#__vue")

export { app }
