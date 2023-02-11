import { ActiveModelSerializer } from "miragejs"

const serializers = {
  product: ActiveModelSerializer.extend({
    embed: true,
    include: ["brand", "type"],
  }),
  brand: ActiveModelSerializer,
}

export { serializers }
