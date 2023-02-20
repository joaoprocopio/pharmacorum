import { SessionsServices } from "~/services"
import { useSessionsStore } from "~/stores"
import { LoginPageName, ErrorPageName, ProductsPageName } from "~/assets"

export const sessionsGuard = async (to, from, next) => {
  const $sessions = useSessionsStore()
  $sessions.currentUser = await SessionsServices.currentUser()

  if (to.name === ErrorPageName) return next()

  if (to.name !== LoginPageName && !$sessions.isAuthenticated)
    return next({ name: LoginPageName })

  if (to.name === LoginPageName && $sessions.isAuthenticated)
    return next({ name: ProductsPageName })

  next()
}
