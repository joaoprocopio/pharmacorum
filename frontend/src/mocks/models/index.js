import { belongsTo, hasMany, Model } from "miragejs"

const models = {
  user: Model,
  product: Model.extend({
    type: hasMany("type"),
    brand: belongsTo("brand"),
  }),
  brand: Model,
  type: Model,
}

export { models }
