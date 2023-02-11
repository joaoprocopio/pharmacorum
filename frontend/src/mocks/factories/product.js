import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { randomNumber } from "./utils"

const product = Factory.extend({
  title() {
    return faker.commerce.product()
  },
  typeIds() {
    let number = randomNumber(1, 5)
    const types = new Array(randomNumber(1, 3))

    for (let i = 0; i < types.length; i++) {
      types.includes(number) ? (number = randomNumber(1, 5)) : null

      types[i] = number
    }

    return types
  },
  brandId() {
    return randomNumber(1, 10)
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

export { product }
