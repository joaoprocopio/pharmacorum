/*
  /api/search/
  |_ /products
*/

export const search = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/search/"
    },
  })
}
