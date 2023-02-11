function routes() {
  this.get("api/users/", (schema) => {
    return schema.users.all()
  })
  this.get("api/products/", (schema) => {
    return schema.products.all()
  })
  this.get("api/brands/", (schema) => {
    return schema.brands.all()
  })
  this.get("api/types/", (schema) => {
    return schema.types.all()
  })
}

export { routes }
