// import { SessionsServices } from "~/services"
// import { useSessionStore } from "@/src/stores"

export const sessionsGuard = async (to, from, next) => {
  // const $session = useSessionStore()
  // $session.currentUser = await SessionsServices.currentUser()

  next()
}
