/*
  /api/products/
  |-  /
  |-  /:id
  |-  /create
  |-  /update
  |_  /delete
*/

import { Response } from "miragejs"

export const brands = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/brands/"

      // TODO: tem q ter paginação
      this.get("/", function (schema, request) {
        return new Response(200, {}, schema.brands.all())
      })
    },
  })
}
