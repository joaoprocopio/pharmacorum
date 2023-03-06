import { ActiveModelSerializer } from "miragejs"

export const serializers = {
  product: ActiveModelSerializer.extend({
    embed: true,
    root: false,
    include: ["brand"],
  }),
  brand: ActiveModelSerializer.extend({
    embed: true,
    root: false,
  }),
  user: ActiveModelSerializer.extend({
    embed: true,
    root: false,
  }),
}
