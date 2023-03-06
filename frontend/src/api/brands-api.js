import { $axios } from "./axios"

const getBrands = (params) => $axios.get("/brands", { params })

export const BrandsApi = {
  getBrands,
}
