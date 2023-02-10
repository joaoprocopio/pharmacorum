import { createServer } from "miragejs"

import { fixtures } from "./fixtures"
import { models } from "./models"
import { routes } from "./routes"
import { serializers } from "./serializers"

const config = (environment) => {
  const config = {
    environment,
    fixtures,
    models,
    routes,
    serializers,
  }

  return config
}

const mockServer = ({ environment = "development" } = {}) => {
  createServer(config(environment))
}

export { mockServer }
