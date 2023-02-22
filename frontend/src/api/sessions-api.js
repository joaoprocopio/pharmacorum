import { $axios } from "./axios"

const currentUser = () => $axios.get("/sessions/current_user")

const identify = (data) => $axios.post("/sessions/identify", data)

const login = (data) => $axios.post("/sessions/login", data)

export const SessionsApi = {
  currentUser,
  identify,
  login,
}
