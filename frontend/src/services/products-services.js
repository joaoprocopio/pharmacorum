import { ProductsApi, Handlers } from "~/api"

const getProducts = async (page, perPage) =>
  ProductsApi.getProducts({ page: page, per_page: perPage })
    .then(({ data }) => data)
    .catch((error) => Handlers.reject(error))

export const ProductsServices = {
  getProducts,
}
