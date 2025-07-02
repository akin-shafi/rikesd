// schemas/teamMember.js
export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "string", // Stores initials or image URL
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "expertise",
      title: "Expertise",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Governors", value: "governors" },
          { title: "Advisors", value: "advisors" },
          { title: "Finance", value: "finance" },
          { title: "Experts", value: "experts" },
          { title: "EMT", value: "emt" },
        ],
      },
    },
  ],
};