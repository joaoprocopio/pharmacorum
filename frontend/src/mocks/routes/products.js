/*
  /api/products/
  |-  /
  |-  /:id
  |-  /create
  |-  /update
  |_  /delete
*/

import { Response } from "miragejs"

export const products = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/products/"

      this.get("/", function (schema, request) {
        const params = {
          page: parseInt(request.queryParams.page) || 1,
          per_page: parseInt(request.queryParams.per_page) || 30,
        }

        const products = this.serialize(
          schema.products
            .all()
            .slice(
              params.page * params.per_page - params.per_page,
              params.page * params.per_page
            )
            .sort((a, b) => {
              return new Date(b.updatedAt) - new Date(a.updatedAt)
            })
        )

        return new Response(
          200,
          {},
          { count: schema.products.all().length, products: products }
        )
      })
    },
  })
}
