import { ProductApi } from "~/api"

const searchProducts = async (page, perPage) =>
  ProductApi.searchProducts({ page: page, per_page: perPage })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

export const ProductServices = {
  searchProducts,
}
