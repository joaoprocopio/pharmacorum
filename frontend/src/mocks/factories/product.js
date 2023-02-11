import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { randomNumber } from "./utils"

const product = Factory.extend({
  title() {
    return faker.commerce.product()
  },
  typeIds() {
    let i = 0
    const types = new Array(randomNumber(1, 3))

    while (types.length > i) {
      let number = randomNumber(1, 5)

      if (types.includes(number)) {
        number = randomNumber(1, 5)
      }

      types[i] = number
      i++
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
