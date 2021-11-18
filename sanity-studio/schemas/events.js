import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import richText from "./richText";

export default{
    title: "Events",
    name: "event",
    type: "document",
    fields: [
      //Columns
      {
        title: "Event Name",
        name: "name",
        type: "string",
      },
      {
        title: "Event Description",
        name: "description",
        type: "richText",
      },
      {
        title: 'Event Link',
        name: 'link',
        type: 'reference',
        to:[{type: "links"}],
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
            { title: "Advance", value: "upe_advance" },
            { title: "SparkDev", value: "upe_sparkdev" },
            { title: "ShellHacks", value: "upe_shellhacks" },
          ],
        },
      },
    ],
  }

