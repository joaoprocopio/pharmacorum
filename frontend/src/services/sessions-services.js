import { SessionsApi } from "~/api"

const currentUser = async () =>
  SessionsApi.currentUser()
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

export const SessionsServices = {
  currentUser,
}
