import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import richText from "./richText"

export default{
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
        title:"Image Description",
        name:"alt",
        type:'richText',
      },
      {
        title: "Flyer",
        name: "flyer",
        type: "image",
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
  }