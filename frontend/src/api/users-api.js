import { $axios } from "./axios"

const currentUser = () => $axios.get("/users/current")

const identify = (data) => $axios.post("/users/identify", data)

const login = (data) => $axios.post("/users/login", data)

const logout = () => $axios.get("/users/logout")

const register = (data) => $axios.post("/users/register", data)

export const UsersApi = {
  currentUser,
  identify,
  login,
  logout,
  register,
}
