function routes() {
  this.get("api/users/", (schema) => {
    return schema.users.all()
  })
  this.get("api/products/", (schema, request) => {
    request.requestBody = request.sendArguments[0]

    console.log(JSON.parse(request.requestBody))

    return schema.products.all()
  })
}

export { routes }
