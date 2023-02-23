import { ProductsPageName, SessionsPageName, ErrorPageName } from "~/assets"
import { ProductsPage, SessionsPage, ErrorPage } from "~/pages"

export const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/sessions/:step?",
    name: SessionsPageName,
    component: SessionsPage,
    props: (route) => {
      if (!route.params.step) return

      return route.params
    },
    meta: {
      layout: {
        simple: true,
      },
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
