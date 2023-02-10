import { RestSerializer } from "miragejs"

const serializers = {
  product: RestSerializer.extend({
    include: ["brandId"],
    embed: true,
  }),
}

export { serializers }
