const seeder = (server) => {
  server.createList("product", 100)
  server.createList("brand", 50)
}

function seeds(server) {
  server.loadFixtures()
  seeder(server)
}

export { seeds }
