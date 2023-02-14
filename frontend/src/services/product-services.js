import { ProductApi } from "~/api"

const getProducts = async (perPage, page) =>
  ProductApi.getProducts({ per_page: perPage, page: page })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

export const ProductServices = {
  getProducts,
}
