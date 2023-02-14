import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { randomNumber } from "./utils"
import { ProductTypes } from "~/assets"

export const product = Factory.extend({
  title() {
    return faker.commerce.product()
  },
  type() {
    // TODO: shuffle lodash
    return Object.values(ProductTypes)
  },
  brandId() {
    // TODO: random number lodash
    return randomNumber(1, 25)
  },
  price() {
    return faker.commerce.price()
  },
  description() {
    return faker.commerce.productDescription()
  },
  createdAt() {
    return faker.date.past()
  },
  updatedAt() {
    return faker.date.recent()
  },
})
