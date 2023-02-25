const reject = (error) => {
  Promise.reject(error)

  return error.response
}

export const Handlers = {
  reject,
}
