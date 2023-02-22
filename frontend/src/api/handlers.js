const reject = (error) => {
  Promise.reject(error)

  return error.response.data
}

export const Handlers = {
  reject,
}
