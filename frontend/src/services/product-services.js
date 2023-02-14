import { ProductApi } from "~/api"

const getProducts = async (page, perPage) =>
  ProductApi.getProducts({ page: page, per_page: perPage })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

export const ProductServices = {
  getProducts,
}
