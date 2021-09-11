export default{
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
        title: 'Event Link',
        name: 'link',
        type: 'reference',
        to:[
            {
                type: "links",
            },
        ],
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
  }