import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import links from './link'
import events from './events'

export default createSchema({
  name: "superSchema",
  types: schemaTypes.concat([
    links,
    {
      title: "Images", //Display Name
      name: "images", //Query Name
      type: "document", //What will this hold?
      fields: [
        //Columns
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Flyer",
          name: "flyer",
          type: "image",
        },
      ],
    },
    events,
  ]),
});
