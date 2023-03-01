import { ProductsListPageName, SessionsPageName, ErrorPageName } from "~/assets"

import { every } from "lodash"

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
    props: (route) =>
      every(route.params, (param) => !!param) ? route.params : {},
    meta: {
      layout: {
        simple: true,
      },
    },
  },
  {
    path: "/products",
    name: ProductsListPageName,
    component: () =>
      import("~/pages/ProductsListPage").then(
        ({ ProductsListPage }) => ProductsListPage
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: ErrorPageName,
    component: () =>
      import("~/pages/ErrorPage").then(({ ErrorPage }) => ErrorPage),
  },
]
