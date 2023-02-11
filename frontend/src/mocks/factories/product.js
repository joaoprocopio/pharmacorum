import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { randomNumber } from "./utils"

const product = Factory.extend({
  typeIds() {
    const types = new Array(randomNumber(1, 3))
    for (let i = 0; i < types.length; i++) {
      types[i] = randomNumber(1, 5)
    }
    return types
  },
  title() {
    return faker.commerce.product()
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
  brandId() {
    return "1"
  },
})

export { product }
