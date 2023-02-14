import { createRouter, createWebHistory } from "vue-router"

import { ProductsPageName, ErrorPageName } from "~/assets"
import { ProductsPage, ErrorPage } from "~/pages"

export const routerPlugin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/products",
      name: ProductsPageName,
      component: ProductsPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: ErrorPageName,
      component: ErrorPage,
    },
  ],
})
