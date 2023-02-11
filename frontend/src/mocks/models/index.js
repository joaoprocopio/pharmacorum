import { hasMany, Model } from "miragejs"

const models = {
  user: Model,
  brand: Model,
  type: Model,
  product: Model.extend({
    brand: hasMany("brand"),
    type: hasMany("type"),
  }),
}

export { models }
