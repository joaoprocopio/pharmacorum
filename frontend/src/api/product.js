import { $axios } from "./axios"

const getProducts = (params = {}) =>
  $axios.get("/api/products", { params: params })

const ProductAPI = {
  getProducts,
}

export { ProductAPI }
