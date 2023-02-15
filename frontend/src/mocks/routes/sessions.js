/*
  /api/sessions/
  |-  /current_user
  |-  /find_user
  |-  /login
  |-  /logout
  |_  /register
*/

export const sessions = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/sessions/"
    },
  })
}
