import { ActiveModelSerializer } from "miragejs"

const serializers = {
  product: ActiveModelSerializer.extend({
    embed: true,
    include: ["brand", "type"],
  }),
  user: ActiveModelSerializer,
}

export { serializers }
