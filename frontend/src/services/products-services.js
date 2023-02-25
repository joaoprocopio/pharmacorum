import { ProductsApi, Handlers } from "~/api"

const searchProducts = async (page, perPage) =>
  ProductsApi.searchProducts({ page: page, per_page: perPage })
    .then(({ data }) => data)
    .catch((error) => Handlers.reject(error))

export const ProductsServices = {
  searchProducts,
}
