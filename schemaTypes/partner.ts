import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'University', value: 'university' },
          { title: 'Research Institute', value: 'research_institute' },
          { title: 'Government', value: 'government' },
          { title: 'Private', value: 'private' },
          { title: 'NGO', value: 'ngo' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'established',
      title: 'Established',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'partnershipSince',
      title: 'Partnership Since',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Active', value: 'active' },
                  { title: 'Completed', value: 'completed' },
                  { title: 'Upcoming', value: 'upcoming' },
                ],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'date',
            }),
            defineField({
              name: 'budget',
              title: 'Budget',
              type: 'string',
            }),
            defineField({
              name: 'outcomes',
              title: 'Outcomes',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'technologies',
              title: 'Technologies',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactPerson',
      title: 'Contact Person',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'researchAreas',
      title: 'Research Areas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'object',
      fields: [
        defineField({
          name: 'students',
          title: 'Students',
          type: 'number',
        }),
        defineField({
          name: 'faculty',
          title: 'Faculty',
          type: 'number',
        }),
        defineField({
          name: 'publications',
          title: 'Publications',
          type: 'number',
        }),
        defineField({
          name: 'patents',
          title: 'Patents',
          type: 'number',
        }),
      ],
    }),
  ],
});