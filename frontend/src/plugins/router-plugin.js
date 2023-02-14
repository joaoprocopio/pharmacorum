import { createRouter, createWebHistory } from "vue-router"

import { ProductsPageName, LoginPageName, ErrorPageName } from "~/assets"
import { ProductsPage, LoginPage, ErrorPage } from "~/pages"

export const routerPlugin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/products",
    },
    {
      path: "/sessions",
      name: LoginPageName,
      component: LoginPage,
      meta: {
        layout: {},
      },
    },
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
