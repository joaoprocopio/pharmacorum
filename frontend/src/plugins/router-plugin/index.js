import { createRouter, createWebHistory } from "vue-router"

import { sessionGuard } from "./session-guard"
import { routes } from "./routes"

export const routerPlugin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

routerPlugin.beforeEach((to, from, next) => {
  // TODO: refatorar pra um multi guard function
  sessionGuard(to, from, next)
})
