import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "superSchema",
  types: schemaTypes.concat([
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
    {
      title: "Events",
      name: "event",
      type: "document",
      fields: [
        //Columns
        {
          title: "Event Title",
          name: "title",
          type: "string",
        },
        {
          title: "Event Description",
          name: "description",
          type: "string",
        },
        {
          title: "Flyer",
          name: "flyer",
          type: "reference",
          to: [{ type: "images" }],
        },
        {
          title: "Program Category",
          name: "category",
          type: "string",
          options: {
            list: [
              { title: "Code", value: "upe_code" },
              { title: "Design", value: "upe_design" },
              { title: "InfoTech", value: "upe_infotech" },
              { title: "Make", value: "upe_make" },
            ],
          },
        },
      ],
    },
  ]),
});
