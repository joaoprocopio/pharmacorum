import { ProductsApi, Handlers } from "~/api"

const getProducts = async (page, per_page) =>
  ProductsApi.getProducts({ page, per_page })
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

export const ProductsServices = {
  getProducts,
}
