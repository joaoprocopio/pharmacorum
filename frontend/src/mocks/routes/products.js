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
            .sort((a, b) => {
              return new Date(b.updatedAt) - new Date(a.updatedAt)
            })
            .slice(page * perPage - perPage, page * perPage)
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

      this.post("/edit/", function (schema, request) {
        const body = JSON.parse(request.requestBody)

        const product = schema.products.findBy({ id: body?.id })

        if (!product) return new Response(400, {}, {})

        product.title = body?.title
        product.description = body?.description
        product.types = body?.types
        product.quantity = body?.quantity
        product.price = body?.price
        product.brandId = body?.brand_id
        product.updatedAt = new Date()

        product.save()

        return new Response(200, {}, product)
      })
    },
  })
}
