import { $axios } from "./axios"

const searchProducts = (params = {}) =>
  $axios.get("/search/products", { params: params })

export const ProductApi = {
  searchProducts,
}
