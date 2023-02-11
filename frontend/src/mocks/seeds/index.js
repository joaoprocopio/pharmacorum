const seeder = (server) => {
  server.createList("product", 50)
  server.createList("brand", 10)
}

function seeds(server) {
  server.loadFixtures()
  seeder(server)
}

export { seeds }
