import { BrandsApi, Handlers } from "~/api"

const getBrands = async () =>
  BrandsApi.getBrands()
    .then((response) => response)
    .catch((error) => Handlers.reject(error))

export const BrandsServices = {
  getBrands,
}
