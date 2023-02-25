/*
  /api/sessions/
  |-  /current_user
  |-  /identify
  |-  /login
  |-  /logout
  |_  /register
*/

import Cookies from "js-cookie"
import { Response } from "miragejs"

import { UserSerializers } from "~/mocks/serializers"

export const sessions = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/sessions/"

      this.get("/current_user/", function (schema) {
        const cookie = Cookies.get("mockuserid")

        if (!cookie) return new Response(200, {}, {})

        try {
          const user = schema.users.findBy({ id: cookie })

          return new Response(200, {}, UserSerializers.authenticated(user))
        } catch {
          return new Response(200, {}, {})
        }
      })

      this.post("/identify/", function (schema, request) {
        const body = JSON.parse(request.requestBody)

        if (!body.query) return new Response(400, {}, {})

        const user = body.query.includes("@")
          ? schema.users.findBy({ email: body.query })
          : schema.users.findBy({ username: body.query })

        if (!user) return new Response(404, {}, {})

        return new Response(200, {}, UserSerializers.findUser(user))
      })

      this.post("/login/", function (schema, request) {
        const body = JSON.parse(request.requestBody)

        if (!body.id || !body.password) return new Response(400, {}, {})

        const user = schema.users.findBy({
          id: body.id,
          password: body.password,
        })

        if (!user) return new Response(404, {}, {})

        if (!Cookies.get("mockuserid")) Cookies.set("mockuserid", body.id)

        return new Response(200, {}, UserSerializers.authenticated(user))
      })

      this.get("/logout/", function () {
        if (!Cookies.get("mockuserid")) return new Response(400, {}, {})

        Cookies.remove("mockuserid")

        return new Response(200, {}, {})
      })

      this.post("/register/", function (schema, request) {
        const body = JSON.parse(request.requestBody)

        if (
          !body.username ||
          !body.email ||
          !body.first_name ||
          !body.last_name ||
          !body.password
        )
          return new Response(400, {}, {})

        const username = schema.users.findBy({ username: body.username })
        const email = schema.users.findBy({ email: body.email })

        if (username || email) return new Response(409, {}, {})

        const user = schema.users.create({
          username: body.username,
          email: body.email,
          firstName: body.first_name,
          lastName: body.last_name,
          password: body.password,
        })

        Cookies.set("mockuserid", user.id)

        return new Response(200, {}, UserSerializers.authenticated(user))
      })
    },
  })
}
