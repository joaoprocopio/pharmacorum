import { Response } from "miragejs"

function routes() {
  this.get("api/users/", (schema) => {
    return schema.users.all()
  })
  this.get("api/products/", (schema, request) => {
    const params = {
      page: 1,
      per_page: 30,
    }

    return new Response(
      200,
      {},
      schema.products
        .all()
        .slice(
          params.page * params.per_page - params.per_page,
          params.page * params.per_page
        )
    )
  })
}

export { routes }

// if request.body:
//         params = loads(request.body)

//     if ("per_page" and "page") not in params.keys():
//         return JsonResponse({}, status=HTTPStatus.BAD_REQUEST)
