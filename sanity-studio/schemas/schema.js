import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import links from './link'
import events from './events'
import images from './images'
import richText from "./richText";

export default createSchema({
  name: "superSchema",
  types: schemaTypes.concat([
    links,
    images,
    events,
    richText,
  ]),
});
