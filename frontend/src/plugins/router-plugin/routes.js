import { ProductsPageName, LoginPageName, ErrorPageName } from "~/assets"
import { ProductsPage, LoginPage, ErrorPage } from "~/pages"

export const routes = [
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
]
