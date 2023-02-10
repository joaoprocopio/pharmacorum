import { hasMany, Model } from "miragejs"

const models = {
  user: Model,
  product: Model.extend({
    type: hasMany(),
    brand: hasMany(),
  }),
  brand: Model,
  type: Model,
}

export { models }
