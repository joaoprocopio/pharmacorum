import { $axios } from "./axios"

const searchProducts = (params) => $axios.get("/search/products", { params })

export const ProductsApi = {
  searchProducts,
}
