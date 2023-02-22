import { SessionsApi } from "~/api"

const currentUser = async () =>
  SessionsApi.currentUser()
    .then(({ data }) => data)
    .catch((error) => {
      Promise.reject(error)
    })

const identify = async (query) =>
  SessionsApi.identify({ query })
    .then(({ data }) => data)
    .catch((error) => {
      Promise.reject(error)
    })

export const SessionsServices = {
  currentUser,
  identify,
}
