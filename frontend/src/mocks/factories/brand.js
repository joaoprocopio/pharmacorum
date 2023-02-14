import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

export const brand = Factory.extend({
  name() {
    return faker.company.name()
  },
})
