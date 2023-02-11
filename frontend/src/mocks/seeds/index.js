function seeds(server) {
  server.loadFixtures()
  server.createList("brand", 10)
  server.createList("product", 50)
}

export { seeds }
