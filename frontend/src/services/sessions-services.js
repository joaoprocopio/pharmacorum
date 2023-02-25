import { SessionsApi, Handlers } from "~/api"

const currentUser = async () =>
  SessionsApi.currentUser()
    .then(({ data }) => data)
    .catch((error) => Handlers.reject(error))

const identify = async (query) =>
  SessionsApi.identify({ query })
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

const login = async (id, password) =>
  SessionsApi.login({ id, password })
    .then(({ data }) => data)
    .catch((error) => Handlers.reject(error))

const logout = async () =>
  SessionsApi.logout()
    .then(({ data }) => data)
    .catch((error) => Handlers.reject(error))

const register = async (user) =>
  SessionsApi.register(user)
    .then(({ data }) => data)
    .catch((error) => Handlers.reject(error))

export const SessionsServices = {
  currentUser,
  identify,
  login,
  logout,
  register,
}
