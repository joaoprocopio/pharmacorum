import { $axios } from "./axios"

const getProducts = (params) => $axios.get("/products", { params })

export const ProductsApi = {
  getProducts,
}
