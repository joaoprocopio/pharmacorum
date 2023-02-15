import { productsRoutes } from "./products-routes"
import { searchRoutes } from "./search-routes"

export function routes() {
  productsRoutes(this)
  searchRoutes(this)
}
