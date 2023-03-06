import { $axios } from "./axios"

const getProducts = (params) => $axios.get("/products", { params })

const getProductById = (id) => $axios.get(`/products/${id}`)

const createProduct = (data) => $axios.post("/products/create", data)

export const ProductsApi = {
  getProducts,
  getProductById,
  createProduct,
}
