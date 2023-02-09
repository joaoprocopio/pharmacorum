function routes() {
  this.namespace = "api"

  this.resource("users")
  this.resource("products")
  this.resource("brands")
}

export { routes }
