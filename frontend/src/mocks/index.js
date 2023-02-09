import { Server } from "miragejs"
import { fixtures } from "./fixtures"
// import factories from "./factories"
// import seeds from "./seeds"
import routes from "./routes"
import models from "./models"

const config = (environment) => {
  const config = {
    environment,
    // factories,
    // seeds,
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
