function routes() {
  this.get("api/users/", (schema) => {
    return schema.users.all()
  })
  this.get("api/products/", (schema) => {
    return schema.products.all()
  })
}

export { routes }
