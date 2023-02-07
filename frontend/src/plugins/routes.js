import { HomePage, ErrorPage } from "~/pages"

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error-page",
    component: ErrorPage,
  },
]

export { routes }
