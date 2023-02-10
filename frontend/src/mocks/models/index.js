import { belongsTo, hasMany, Model } from "miragejs"

const models = {
  user: Model,
  product: Model.extend({
    brand: hasMany(),
  }),
  brand: Model.extend({
    id: belongsTo(),
  }),
}

export { models }
