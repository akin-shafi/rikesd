import { defineField } from 'sanity';

const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'string', // Can be changed to 'image' if using Sanity's image type
      description: 'Stores initials or image URL',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Governors', value: 'governors' },
          { title: 'Advisors', value: 'advisors' },
          { title: 'Finance', value: 'finance' },
          { title: 'Experts', value: 'experts' },
          { title: 'EMT', value: 'emt' },
        ],
      },
    }),
  ],
};

export default teamMember;
