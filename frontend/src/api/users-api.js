import { $axios } from "./axios"

const currentUser = () => $axios.get("/auth/current")

const identify = (data) => $axios.post("/auth/identify", data)

const login = (data) => $axios.post("/auth/login", data)

const logout = () => $axios.get("/auth/logout")

const register = (data) => $axios.post("/auth/register", data)

export const UsersApi = {
  currentUser,
  identify,
  login,
  logout,
  register,
}
