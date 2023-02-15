/*
  /api/sessions/
  |-  /current_user
  |-  /find_user
  |-  /login
  |-  /logout
  |_  /register
*/

export const sessionsRoutes = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/sessions/"
    },
  })
}
