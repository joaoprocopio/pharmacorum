/*
  /api/sessions/
  |-  /current_user
  |-  /identify
  |-  /login
  |-  /logout
  |_  /register
*/

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

import { Response } from "miragejs"

export const sessions = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/sessions/"

      this.get("/current_user/", function (schema, request) {
        return new Response(
          200,
          {},
          {
            schema: this.serialize(schema.users.all()),
            is_authenticated: false,
          }
        )
      })
    },
  })
}
