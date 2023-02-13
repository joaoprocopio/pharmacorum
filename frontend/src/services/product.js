import { ProductAPI } from "~/api"

const getProducts = async (perPage = 30, page = 1) =>
  ProductAPI.getProducts({ per_page: perPage, page: page })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

const ProductServices = {
  getProducts,
}

export { ProductServices }
