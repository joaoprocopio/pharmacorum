function routes() {
  this.namespace = "api"

  this.resource("users")
  this.resource("products")
}

export { routes }
