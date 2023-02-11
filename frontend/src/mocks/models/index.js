import { hasMany, Model } from "miragejs"

const models = {
  user: Model,
  brand: Model,
  type: Model,
  product: Model.extend({
    brand: hasMany(),
    type: hasMany(),
  }),
}

export { models }
