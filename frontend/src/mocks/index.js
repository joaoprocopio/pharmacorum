import { createServer } from "miragejs"

import { factories } from "./factories"
import { fixtures } from "./fixtures"
import { models } from "./models"
import { routes } from "./routes"
import { seeds } from "./seeds"
import { serializers } from "./serializers"

const config = (environment) => {
  const config = {
    factories,
    environment,
    fixtures,
    models,
    routes,
    seeds,
    serializers,
  }

  return config
}

const mockServer = ({ environment = "development" } = {}) => {
  return createServer(config(environment))
}

export { mockServer }
