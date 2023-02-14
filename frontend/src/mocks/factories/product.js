import { Factory } from "miragejs"

import { faker } from "@faker-js/faker"
import { ProductTypes } from "~/assets"

import { shuffle, random } from "lodash"

export const product = Factory.extend({
  title() {
    return faker.commerce.product()
  },
  type() {
    return shuffle(Object.values(ProductTypes)).slice(0, random(1, 3))
  },
  brandId() {
    return random(1, 25)
  },
  price() {
    return faker.commerce.price()
  },
  quantity() {
    return random(1, 200)
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
