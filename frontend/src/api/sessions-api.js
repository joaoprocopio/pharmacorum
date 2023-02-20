import { $axios } from "./axios"

const currentUser = () => $axios.get("/sessions/current_user")

export const SessionsApi = {
  currentUser,
}
