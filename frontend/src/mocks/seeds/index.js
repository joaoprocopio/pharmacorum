export function seeds(server) {
  server.loadFixtures()
  server.createList("brand", 25)
  server.createList("product", 100)
}
