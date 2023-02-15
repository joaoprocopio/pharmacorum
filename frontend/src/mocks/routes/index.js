import { products } from "./products"
import { search } from "./search"
import { sessions } from "./sessions"

export function routes() {
  products(this)
  search(this)
  sessions(this)
}
