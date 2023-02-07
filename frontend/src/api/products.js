import { $axios } from "./axios"

const getProducts = $axios
  .get("/products")
  .then((response) => console.log(response))

export { getProducts }
