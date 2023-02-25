import { SessionsServices } from "~/services"
import { useSessionsStore } from "~/stores"
import {
  SessionsPageName,
  ErrorPageName,
  ProductsPageName,
  SessionsSteps,
} from "~/assets"

export const sessionsGuard = async (to, from, next) => {
  const $sessions = useSessionsStore()
  const { data, status } = await SessionsServices.currentUser()

  if (status === 200) $sessions.currentUser = data

  if (to.name === ErrorPageName) return next()

  if (to.name !== SessionsPageName && !$sessions.isAuthenticated)
    return next({ name: SessionsPageName })

  if (to.name === SessionsPageName && $sessions.isAuthenticated)
    return next({ name: ProductsPageName })

  if (
    to.name === SessionsPageName &&
    to.params.step === SessionsSteps.LOGIN &&
    !$sessions.findUser?.id
  )
    return next({ name: SessionsPageName })

  next()
}
