import { RestSerializer } from "miragejs"
import { snakeCase } from "lodash"

const serializers = {
  product: RestSerializer.extend({
    keyForAttribute(attr) {
      return snakeCase(attr)
    },
    include: ["type"],
    embed: true,
  }),
  brand: RestSerializer,
}

export { serializers }
