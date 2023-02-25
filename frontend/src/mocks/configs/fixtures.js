import { random } from "lodash"

const usernames = [
  "mark.zuckerberg",
  "tony.lampada",
  "elon.musk",
  "joao.procopio",
  "erick.rost",
]

const passwords = ["password"]

export const users = usernames.map((username) => {
  return {
    username: username,
    password: passwords[random(0, passwords.length - 1)],
  }
})
