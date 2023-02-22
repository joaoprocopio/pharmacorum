/*
  /api/sessions/
  |-  /current_user
  |-  /identify
  |-  /login
  |-  /logout
  |_  /register
*/

import { Response } from "miragejs"
import { UserSerializers } from "~/mocks/serializers"

export const sessions = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/sessions/"

      this.get("/current_user/", function (schema) {
        const cookie = document.cookie
          .split(";")
          .map((cookie) => cookie.trim(" "))
          .map((cookie) => cookie.split("="))
          .map((cookie) => {
            return {
              [cookie[0]]: cookie[1],
            }
          })
          .find((cookie) => cookie.mockuserid)

        if (!cookie?.mockuserid)
          return new Response(200, {}, UserSerializers.notAuthenticated())

        try {
          const user = schema.users.findBy({ id: cookie.mockuserid })

          return new Response(200, {}, UserSerializers.authenticated(user))
        } catch {
          return new Response(200, {}, UserSerializers.notAuthenticated())
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

        if (!body.id && !body.password)
          return new Response(400, {}, UserSerializers.notAuthenticated())

        const user = schema.users.findBy({
          id: body.id,
          password: body.password,
        })

        if (!user)
          return new Response(404, {}, UserSerializers.notAuthenticated())

        if (!document.cookie.includes("mockuserid"))
          document.cookie = `mockuserid=${body.id}`

        return new Response(200, {}, UserSerializers.authenticated(user))
      })
    },
  })
}
