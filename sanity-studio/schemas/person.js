export default {
  title: "People",
  name: "person",
  type: "document",
  fields: [
    {
      name: "person_name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "person_image",
      title: "Portrait",
      type: "image",
    },
    {
      name: "title_options",
      title: "Is this person:",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "A member of the executive board?", value: "isEboard" },
          { title: "An alumni advisor?", value: "isAlumniAdvisor" },
          { title: "The faculty advisor?", value: "isFacultyAdvisor" },
          { title: "Other", value: "isOther" },
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
