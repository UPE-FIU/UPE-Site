import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default
{
    title:"Links",
    name: "links",
    type: 'document',
    fields:[
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: "link",
        title: 'Link',
        type: 'url'
      }
    ]
  };