import { createRouter, createWebHistory } from "vue-router"

import { sessionsGuard } from "./sessions-guard"
import { routes } from "./routes"

export const routerPlugin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

routerPlugin.beforeEach((to, from, next) => {
  // TODO: refatorar pra um multi guard function
  sessionsGuard(to, from, next)
})
