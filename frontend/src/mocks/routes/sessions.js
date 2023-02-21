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
          return new Response(200, {}, {})
        }

        try {
          const user = this.serialize(
            schema.users.findBy({ id: cookie.mockuserid })
          )
          user["is_authenticated"] = true

          return new Response(200, {}, user)
        } catch {
          return new Response(200, {}, {})
        }
      })
    },
  })
}
