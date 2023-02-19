import { SessionsServices } from "~/services"
import { useSessionStore } from "@/src/stores"

export const sessionGuard = async (to, from, next) => {
  const $session = useSessionStore()
  $session.currentUser = await SessionsServices.currentUser()

  next()
}
