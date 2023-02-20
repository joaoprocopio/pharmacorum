/*
  /api/sessions/
  |-  /current_user
  |-  /find_user
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
        return new Response(200, {}, { is_authenticated: false })
      })
    },
  })
}
