import { $axios } from "./axios"

const getProducts = (params = {}) =>
  $axios.get("/search/products", { params: params })

export const ProductsApi = {
  getProducts,
}
