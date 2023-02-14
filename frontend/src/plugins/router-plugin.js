import { createRouter, createWebHistory } from "vue-router"

import { HomePageName, ErrorPageName } from "~/assets"
import { HomePage, ErrorPage } from "~/pages"

// TODO: criar um middleware, para caso não esteja autenticado, redirecionar para /sessions

export const routerPlugin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: HomePageName,
      component: HomePage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: ErrorPageName,
      component: ErrorPage,
    },
  ],
})
