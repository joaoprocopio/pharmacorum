import axios from "axios"

import { env } from "@/configs"

const $axios = axios.create({
  baseURL: env.isDev && env.isMock ? undefined : env.apiUrl,
  withCredentials: true,
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
})

export { $axios }
