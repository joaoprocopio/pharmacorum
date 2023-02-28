import { ProductsPageName, SessionsPageName, ErrorPageName } from "~/assets"

export const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/sessions/:step?",
    name: SessionsPageName,
    component: () =>
      import("~/pages/SessionsPage").then(({ SessionsPage }) => SessionsPage),
    props: (route) => {
      if (Object.values(route.params).every((param) => !param)) return

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
    component: () =>
      import("~/pages/ProductsPage").then(({ ProductsPage }) => ProductsPage),
  },
  {
    path: "/:pathMatch(.*)*",
    name: ErrorPageName,
    component: () =>
      import("~/pages/ErrorPage").then(({ ErrorPage }) => ErrorPage),
  },
]
