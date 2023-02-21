import { ActiveModelSerializer } from "miragejs"

export const serializers = {
  product: ActiveModelSerializer.extend({
    embed: true,
    root: false,
    include: ["brand"],
  }),
  user: ActiveModelSerializer.extend({
    embed: true,
    root: false,
  }),
}
