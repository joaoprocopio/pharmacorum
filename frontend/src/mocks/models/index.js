import { belongsTo, hasMany, Model } from "miragejs"

const models = {
  user: Model,
  brand: Model,
  type: Model,
  product: Model.extend({
    brand: belongsTo(),
    type: hasMany(),
  }),
}

export { models }
