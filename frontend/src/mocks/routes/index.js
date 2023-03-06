import { brands } from "./brands"
import { products } from "./products"
import { sessions } from "./sessions"

export function routes() {
  brands(this)
  products(this)
  sessions(this)
}
