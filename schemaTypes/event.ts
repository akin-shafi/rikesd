import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'agenda',
      title: 'Agenda',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
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
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'organization',
              title: 'Organization',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'string',
            }),
            defineField({
              name: 'linkedIn',
              title: 'LinkedIn',
              type: 'url',
            }),
            defineField({
              name: 'twitter',
              title: 'Twitter',
              type: 'url',
            }),
            defineField({
              name: 'expertise',
              title: 'Expertise',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'flyer',
      title: 'Flyer',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'discussion',
      title: 'Discussion',
      type: 'object',
      fields: [
        defineField({
          name: 'topic',
          title: 'Topic',
          type: 'string',
        }),
        defineField({
          name: 'summary',
          title: 'Summary',
          type: 'text',
        }),
        defineField({
          name: 'keyPoints',
          title: 'Key Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'attendees',
      title: 'Attendees',
      type: 'number',
    }),
    defineField({
      name: 'recording',
      title: 'Recording',
      type: 'url',
    }),
  ],
});