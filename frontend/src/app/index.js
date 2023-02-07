import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "~/router"

import { env } from "@/configs"

if (env.isDev && env.isMock) {
  // turn up mock server
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#__vue")
