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
        const page = parseInt(request.queryParams.page) || 1
        const perPage = parseInt(request.queryParams.per_page) || 30

        const products = this.serialize(
          schema.products
            .all()
            .slice(page * perPage - perPage, page * perPage)
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

      this.get("/:id", function (schema, request) {
        const id = request.params.id

        if (!id) return new Response(400, {}, {})

        const product = schema.products.findBy({ id })

        if (!product) return new Response(404, {}, {})

        return new Response(200, {}, product)
      })

      this.post("/create/", function (schema, request) {
        const body = JSON.parse(request.requestBody)

        if (
          !body.title ||
          !body.description ||
          !body.types ||
          !body.quantity ||
          !body.price ||
          !body.brand_id
        )
          return new Response(400, {}, {})

        const product = schema.products.create({
          title: body.title,
          types: body.types,
          brandId: body.brand_id,
          description: body.description,
          quantity: body.quantity,
          price: body.price,
          createdAt: new Date(),
          updatedAt: new Date(),
        })

        return new Response(200, {}, product)
      })

      // TODO: fazer a função de edição por ID
      // this.post("/edit/:id/", function (schema, request) {})
    },
  })
}
