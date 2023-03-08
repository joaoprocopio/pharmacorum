import { UsersApi, Handlers } from "~/api"

const currentUser = async () =>
  UsersApi.currentUser()
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

const identify = async (query) =>
  UsersApi.identify({ query })
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

const login = async (id, password) =>
  UsersApi.login({ id, password })
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

const logout = async () =>
  UsersApi.logout()
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

const register = async (user) =>
  UsersApi.register(user)
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

export const UsersServices = {
  currentUser,
  identify,
  login,
  logout,
  register,
}
