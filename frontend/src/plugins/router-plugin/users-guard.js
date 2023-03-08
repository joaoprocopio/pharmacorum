import { UsersServices } from "~/services"
import { useUsersStore } from "~/stores"
import {
  UsersPageName,
  ErrorPageName,
  ProductsListPageName,
  UsersStepsEnum,
} from "~/assets"

export const usersGuard = async (to, from, next) => {
  const $users = useUsersStore()
  const { data, status } = await UsersServices.currentUser()

  if (status === 200) $users.currentUser = data

  if (to.name === ErrorPageName) return next()

  if (to.name !== UsersPageName && !$users.isAuthenticated)
    return next({ name: UsersPageName })

  if (to.name === UsersPageName && $users.isAuthenticated)
    return next({ name: ProductsListPageName })

  if (
    to.name === UsersPageName &&
    to.params.step === UsersStepsEnum.LOGIN &&
    !$users.findUser?.id
  )
    return next({ name: UsersPageName })

  next()
}
