import { createServer } from "miragejs"

import { factories } from "./factories"
import { models } from "./models"
import { routes } from "./routes"
import { seeds } from "./seeds"
import { serializers } from "./serializers"

const config = function (environment) {
  const config = {
    factories,
    environment,
    models,
    routes,
    seeds,
    serializers,
  }

  return config
}

export const mockServer = function ({ environment = "development" } = {}) {
  return createServer(config(environment))
}
