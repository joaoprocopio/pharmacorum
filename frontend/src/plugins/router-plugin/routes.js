import { ProductsPageName, SessionsPageName, ErrorPageName } from "~/assets"
import { ProductsPage, SessionsPage, ErrorPage } from "~/pages"

export const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/sessions",
    name: SessionsPageName,
    component: SessionsPage,
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
]
