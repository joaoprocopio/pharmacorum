import { createRouter, createWebHistory } from "vue-router"

import { usersGuard } from "./users-guard"
import { routes } from "./routes"

export const routerPlugin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

routerPlugin.beforeEach((to, from, next) => {
  usersGuard(to, from, next)
})
