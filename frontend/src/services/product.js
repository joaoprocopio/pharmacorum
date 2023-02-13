import { ProductAPI } from "~/api"

const getProducts = async (perPage, page) =>
  ProductAPI.getProducts({ per_page: perPage, page: page })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

const ProductServices = {
  getProducts,
}

export { ProductServices }
