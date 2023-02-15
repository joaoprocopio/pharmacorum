/*
  /api/products/
  |-  /:id
  |-  /create
  |-  /update
  |_  /delete
*/

export const products = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/products/"
    },
  })
}
