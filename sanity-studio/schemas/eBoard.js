export default {
    title: "Executive Board",
    name: "eboard",
    type: "document",
    fields: [
      {
        name: "eboard_name",
        title: "Full Name",
        type: "string",
      },
      {
        name: "eboard_image",
        title: "Portrait",
        type: "image",
      },
      {
        name: "eboard_position",
        title: "Position",
        type: "string",
        options: {
          list: [
            { title: "President", value: "eboard_president" },
            { title: "Vice-President", value: "eboard_vice_president" },
            { title: "Director of Membership", value: "eboard_membership" },
            {
              title: "Director of Communications",
              value: "eboard_communications",
            },
            { title: "Director of Finance", value: "eboard_finance" },
            { title: "Director of Logistics", value: "eboard_logistics" },
            { title: "Director of Marketing", value: "eboard_marketing" },
            {
              title: "Director of Social and Digital Media",
              value: "eboard_social_media",
            },
            { title: "Director of Technology", value: "eboard_technology" },
            {
              title: "Director of Industry Relations",
              value: "eboard_industry_relations",
            },
            { title: "Director of Publications", value: "eboard_publications" },
            { title: "RSO Representative", value: "eboard_rso" },
            { title: "SGA Representative", value: "eboard_sga" },
            { title: "Faculty Advisor", value: "faculty_advisor" },
            { title: "Alumni Advisor", value: "alumni_advisor" },
          ],
        },
      },
      {
        name: "eboard_linkedin",
        title: "LinkedIn",
        type: "url",
      },
      {
        name: "eboard_instagram",
        title: "Instagram",
        type: "url",
      },
      {
        name: "eboard_github",
        title: "GitHub",
        type: "url",
      },
    ],
  };