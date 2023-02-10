import { Factory } from "miragejs"

import { faker } from "@faker-js/faker"

const factories = {
  product: Factory.extend({
    type() {
      // this one have a relationship
      return null
    },
    title() {
      return faker.commerce.product()
    },
    description() {
      return faker.commerce.productDescription()
    },
    created_at() {
      return faker.date.past()
    },
    updated_at() {
      return faker.date.recent()
    },
    brand() {
      // this one have a relationship
      return null
    },
  }),
  brand: Factory.extend({
    name() {
      return faker.company.name()
    },
  }),
}

export { factories }
