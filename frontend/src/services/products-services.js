import { ProductsApi, Handlers } from "~/api"

const getProducts = async () =>
  ProductsApi.getProducts()
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

export const ProductsServices = {
  getProducts,
}
