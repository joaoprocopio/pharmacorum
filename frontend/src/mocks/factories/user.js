/*
  id:             1
  password :      pbkdf2_sha256$390000$jSqAb3tR4t04ZOqGK3eT01$TNgNzNR1WoH0r0bb/xFN41RYpW1xeqHWiqJbu3PAnyE=
  last_login:     2023-02-20 15:53:08.162 -0300
  is_superuser:   true
  username:       admin
  first_name:
  last_name:
  email:          admin@admin.com
  is_staff:       true
  is_active:      true
  date_joined:    2023-02-20 15:53:00.267 -0300
*/

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
