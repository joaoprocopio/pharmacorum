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

      this.get("/current_user/", function (schema, request) {
        let cookies = document.cookie
          ? document.cookie
              .split(";")
              .map((cookie) => cookie.trim(" "))
              .map((cookie) => cookie.split("="))
              .map((cookie) => {
                return {
                  [cookie[0]]: cookie[1],
                }
              })
          : {}

        return new Response(
          200,
          {},
          {
            is_authenticated: false,
          }
        )
      })
    },
  })
}
