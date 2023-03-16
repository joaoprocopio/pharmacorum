import { Response } from "miragejs"

export const brands = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/brands/"

      this.get("/", function (schema, request) {
        const page = parseInt(request.queryParams.page) || 1
        const perPage = parseInt(request.queryParams.per_page) || 30
        const query = request.queryParams.query || ""

        const brands = schema.brands.where((brand) =>
          brand.title.toLowerCase().startsWith(query)
        )

        return new Response(
          200,
          {},
          {
            count: brands.length,
            brands: this.serialize(
              brands.slice(page * perPage - perPage, page * perPage)
            ),
          }
        )
      })
    },
  })
}
