import { $axios } from "./axios"

const currentUser = () => $axios.get("/sessions/current_user")

const identify = (data) => $axios.post("/sessions/identify", data)

export const SessionsApi = {
  currentUser,
  identify,
}
