import { belongsTo, Model } from "miragejs"

export const models = {
  user: Model,
  brand: Model,
  product: Model.extend({
    brand: belongsTo(),
  }),
}
