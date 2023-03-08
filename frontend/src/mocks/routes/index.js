import { brands } from "./brands"
import { products } from "./products"
import { users } from "./users"

export function routes() {
  brands(this)
  products(this)
  users(this)
}
