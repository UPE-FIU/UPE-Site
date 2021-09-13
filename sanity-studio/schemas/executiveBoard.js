export default {
  title: "Executive Board",
  name: "eboard",
  type: "document",
  fields: [
    {
      name: "eboard_name",
      title: "Full Name",
      type: "reference",
      to: [
        {
          type: "person",
        },
      ],
      options: {
        filter: "title_options == $title_options",
        filterParams: { title_options: "isEboard" },
      },
    },
    {
      name: "eboard_position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "President", value: "eboard_pre" },
          { title: "Vice-President", value: "eboard_vic" },
          { title: "Director of Membership", value: "eboard_mem" },
          { title: "Director of Communications", value: "eboard_com" },
          { title: "Director of Finance", value: "eboard_fin" },
          { title: "Director of Logistics", value: "eboard_log" },
          { title: "Director of Marketing", value: "eboard_mar" },
          {
            title: "Director of Social and Digital Media",
            value: "eboard_sdm",
          },
          { title: "Director of Technology", value: "eboard_tec" },
          { title: "Director of Industry Relations", value: "eboard_ir" },
          { title: "Director of Publications", value: "eboard_pub" },
          { title: "RSO Representative", value: "eboard_rso" },
          { title: "SGA Representative", value: "eboard_sga" },
        ],
      },
    },
  ],
};
