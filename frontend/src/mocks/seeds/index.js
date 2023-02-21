import { userSeeds, brandSeeds, productsSeeds } from "~/mocks/configs"

export function seeds(server) {
  server.loadFixtures()
  server.createList("user", userSeeds)
  server.createList("brand", brandSeeds)
  server.createList("product", productsSeeds)
}
