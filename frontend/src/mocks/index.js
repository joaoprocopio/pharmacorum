import { Server } from "miragejs"

import { fixtures } from "./fixtures"
import { models } from "./models"
import { routes } from "./routes"

const config = (environment) => {
  const config = {
    environment,
    models,
    routes,
  }

  if (Object.keys(fixtures).length) {
    config.fixtures = fixtures
  }

  return config
}

const mockServer = ({ environment = "development" } = {}) => {
  return new Server(config(environment))
}

export { mockServer }
