import { Response } from "miragejs"

function routes() {
  this.get("api/users/", (schema) => {
    return schema.users.all()
  })
  this.get("api/products/", (schema, request) => {
    const params = {
      page: parseInt(request?.queryParams?.page) || 1,
      per_page: parseInt(request?.queryParams?.per_page) || 30,
    }

    const response = schema.products
      .all()
      .slice(
        params.page * params.per_page - params.per_page,
        params.page * params.per_page
      )
      .sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
      })

    if (response.length <= 0) {
      return new Response(400, {}, {})
    }

    return new Response(200, {}, response)
  })
}

export { routes }
