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
          { title: "Membership", value: "eboard_mem" },
          { title: "Communications", value: "eboard_com" },
          { title: "Finance", value: "eboard_fin" },
          { title: "Logistics", value: "eboard_log" },
          { title: "Marketing", value: "eboard_mar" },
          { title: "Social and Digital Media", value: "eboard_sdm" },
          { title: "Technology", value: "eboard_tec" },
          { title: "Industry Relations", value: "eboard_ir" },
          { title: "Publications", value: "eboard_pub" },
          { title: "RSO Representative", value: "eboard_rso" },
          { title: "SGA Representative", value: "eboard_sga" },
        ],
      },
    },
  ],
};
