import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

export const brand = Factory.extend({
  title() {
    return faker.company.name()
  },
})
