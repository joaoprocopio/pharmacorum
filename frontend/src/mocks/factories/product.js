import { Factory } from "miragejs"
import { shuffle, random } from "lodash"
import { faker } from "@faker-js/faker"

import { brandSeeds } from "~/mocks/configs"
import { ProductTypesEnum } from "~/assets"

export const product = Factory.extend({
  title() {
    return faker.commerce.product()
  },
  types() {
    return shuffle(Object.keys(ProductTypesEnum)).slice(0, random(0, 5))
  },
  brandId() {
    return random(1, brandSeeds)
  },
  price() {
    return faker.commerce.price(5, 5000)
  },
  quantity() {
    return random(1, 5000)
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
