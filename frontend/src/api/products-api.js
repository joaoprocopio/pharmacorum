import { $axios } from "./axios"

const getProducts = (params) => $axios.get("/products", { params })

const getProductById = (id) => $axios.get(`/products/${id}`)

export const ProductsApi = {
  getProducts,
  getProductById,
}
