import { BrandsApi, Handlers } from "~/api"

const getBrands = async (query) =>
  BrandsApi.getBrands({ query })
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

export const BrandsServices = {
  getBrands,
}
