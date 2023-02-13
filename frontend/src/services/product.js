import { ProductAPI } from "~/api"

const getProducts = async (params) =>
  ProductAPI.getProducts(params)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

const ProductServices = {
  getProducts,
}

export { ProductServices }
