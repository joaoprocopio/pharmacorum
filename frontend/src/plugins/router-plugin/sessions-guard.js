import { SessionsServices } from "~/services"
import { useSessionsStore } from "~/stores"
import {
  SessionsPageName,
  ErrorPageName,
  ProductsListPageName,
  SessionsStepsEnum,
} from "~/assets"

export const sessionsGuard = async (to, from, next) => {
  const $sessions = useSessionsStore()
  const { data, status } = await SessionsServices.currentUser()

  if (status === 200) $sessions.currentUser = data

  if (to.name === ErrorPageName) return next()

  if (to.name !== SessionsPageName && !$sessions.isAuthenticated)
    return next({ name: SessionsPageName })

  if (to.name === SessionsPageName && $sessions.isAuthenticated)
    return next({ name: ProductsListPageName })

  if (
    to.name === SessionsPageName &&
    to.params.step === SessionsStepsEnum.LOGIN &&
    !$sessions.findUser?.id
  )
    return next({ name: SessionsPageName })

  next()
}
