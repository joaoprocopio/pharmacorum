import { brands } from "./brands"
import { products } from "./products"
import { search } from "./search"
import { sessions } from "./sessions"

export function routes() {
  brands(this)
  products(this)
  search(this)
  sessions(this)
}
