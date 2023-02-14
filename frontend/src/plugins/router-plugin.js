import { createRouter, createWebHistory } from "vue-router"

import { HomePageName, ErrorPageName } from "~/assets"
import { HomePage, ErrorPage } from "~/pages"

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
