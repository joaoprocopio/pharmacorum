import { ActiveModelSerializer } from "miragejs"

const serializers = {
  product: ActiveModelSerializer.extend({
    embed: true,
    root: false,
    include: ["brand", "type"],
  }),
  user: ActiveModelSerializer,
}

export { serializers }
