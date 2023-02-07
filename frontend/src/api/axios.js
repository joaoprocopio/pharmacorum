import axios from "axios"

import { env } from "@/configs"

const url = env.isDev && env.isMock ? undefined : env.apiUrl

const $axios = axios.create({
  baseURL: `${url}/api/`,
  withCredentials: true,
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
})

export { $axios }
