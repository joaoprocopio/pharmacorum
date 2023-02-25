import { ProductsApi, Handlers } from "~/api"

const searchProducts = async () =>
  ProductsApi.searchProducts()
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

export const ProductsServices = {
  searchProducts,
}
