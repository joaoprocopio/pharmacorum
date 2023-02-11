import { RestSerializer } from "miragejs"
import { snakeCase } from "lodash"

const serializers = {
  // product: Serializer.extend({
  //   keyForAttribute(attr) {
  //     return snakeCase(attr)
  //   },
  //   include: ["type"],
  //   embed: true,
  // }),
  product: RestSerializer.extend({
    include: ["type"],
    embed: true,
  }),
}

export { serializers }
