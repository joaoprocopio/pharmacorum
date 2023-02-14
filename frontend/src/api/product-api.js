import { $axios } from "./axios"

const getProducts = (params = {}) =>
  $axios.get("/api/products", { params: params })

export const ProductApi = {
  getProducts,
}
