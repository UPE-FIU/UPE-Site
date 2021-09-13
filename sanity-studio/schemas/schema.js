import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import executiveBoard from "./executiveBoard";
import person from "./person";
export default createSchema({
  name: "superSchema",
  types: schemaTypes.concat([executiveBoard, person]),
});
