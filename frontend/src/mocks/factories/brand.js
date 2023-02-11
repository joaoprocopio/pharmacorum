import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

const brand = Factory.extend({
  name() {
    return faker.company.name()
  },
})

export { brand }
