import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

import { users } from "~/mocks/configs"

export const user = Factory.extend({
  password(id) {
    return users[id]?.password
  },
  lastLogin() {
    return faker.date.recent()
  },
  isSuperuser() {
    return false
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  username(id) {
    return users[id]?.username
  },
  firstName(id) {
    return users[id]?.username.split(".")[0]
  },
  lastName(id) {
    return users[id]?.username.split(".")[1]
  },
  email(id) {
    return `${users[id]?.username}@gmail.com`
  },
  isStaff() {
    return false
  },
  isActive() {
    return false
  },
  dateJoined() {
    return faker.date.past()
  },
})
