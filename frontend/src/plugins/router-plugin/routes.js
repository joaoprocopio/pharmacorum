import { ProductsPageName, SessionsPageName, ErrorPageName } from "~/assets"
import { ProductsPage, SessionsPage, ErrorPage } from "~/pages"

import { SessionsSteps } from "~/assets"

export const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/sessions",
    redirect: {
      name: SessionsPageName,
      params: {
        step: SessionsSteps.IDENTIFICATION,
      },
    },
  },
  {
    path: "/sessions/:step",
    name: SessionsPageName,
    component: SessionsPage,
    props: true,
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
