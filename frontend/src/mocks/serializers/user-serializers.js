const authenticated = (user) => {
  return {
    id: user.id,
    full_name: user.fullName,
    username: user.username,
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    is_authenticated: true,
  }
}

const notAuthenticated = () => {
  return {
    id: null,
    username: "",
    is_authenticated: false,
  }
}

const findUser = (user) => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    first_name: user.firstName,
  }
}

export const UserSerializers = {
  authenticated,
  notAuthenticated,
  findUser,
}
