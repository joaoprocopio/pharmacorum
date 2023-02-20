import { SessionsServices } from "~/services"
import { useSessionsStore } from "~/stores"
import { SessionsPageName, ErrorPageName, ProductsPageName } from "~/assets"

export const sessionsGuard = async (to, from, next) => {
  const $sessions = useSessionsStore()
  $sessions.currentUser = await SessionsServices.currentUser()

  if (to.name === ErrorPageName) return next()

  if (to.name !== SessionsPageName && !$sessions.isAuthenticated)
    return next({ name: SessionsPageName })

  if (to.name === SessionsPageName && $sessions.isAuthenticated)
    return next({ name: ProductsPageName })

  next()
}
