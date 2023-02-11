async function seeds(server) {
  await server.loadFixtures()
  await server.createList("brand", 10)
  await server.createList("product", 50)
}

export { seeds }
