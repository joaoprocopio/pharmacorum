/*
  /api/sessions/
  |-  /current_user
  |-  /identify
  |-  /login
  |-  /logout
  |_  /register
*/

import { Response } from "miragejs"

export const sessions = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/sessions/"

      this.get("/current_user/", function (schema) {
        const cookies = document.cookie
          ? document.cookie
              .split(";")
              .map((cookie) => cookie.trim(" "))
              .map((cookie) => cookie.split("="))
              .map((cookie) => {
                return {
                  [cookie[0]]: cookie[1],
                }
              })
          : []
        const cookie = cookies.find((cookie) => cookie?.mockuserid)

        if (!cookie) {
          return new Response(
            200,
            {},
            {
              id: null,
              username: "",
              is_authenticated: false,
            }
          )
        }

        try {
          const user = schema.users.findBy({ id: cookie.mockuserid })

          return new Response(
            200,
            {},
            {
              id: user.id,
              full_name: user.fullName,
              username: user.username,
              first_name: user.firstName,
              last_name: user.lastName,
              email: user.email,
              is_authenticated: true,
            }
          )
        } catch {
          return new Response(
            200,
            {},
            {
              id: null,
              username: "",
              is_authenticated: false,
            }
          )
        }
      })
      this.post("/identify/", function (schema, request) {
        const body = JSON.parse(request.requestBody)

        if (!body?.query) {
          return new Response(404, {}, {})
        }

        return new Response(
          200,
          {},
          {
            id: "user.id",
            username: "user.username",
            email: "user.email",
            first_name: "user.first_name",
          }
        )
      })
    },
  })
}
