/*
  /api/products/
  |-  /:id
  |-  /create
  |-  /update
  |_  /delete
*/

export const productsRoutes = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/products/"
    },
  })
}
