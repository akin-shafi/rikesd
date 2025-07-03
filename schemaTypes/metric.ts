import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'metric',
  title: 'Metric',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'prefix',
      title: 'Prefix',
      type: 'string',
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Research', value: 'research' },
          { title: 'Partnerships', value: 'partnerships' },
          { title: 'Impact', value: 'impact' },
          { title: 'Global', value: 'global' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'trend',
      title: 'Trend',
      type: 'object',
      fields: [
        defineField({
          name: 'direction',
          title: 'Direction',
          type: 'string',
          options: {
            list: [
              { title: 'Up', value: 'up' },
              { title: 'Down', value: 'down' },
              { title: 'Stable', value: 'stable' },
            ],
          },
        }),
        defineField({
          name: 'percentage',
          title: 'Percentage',
          type: 'number',
        }),
        defineField({
          name: 'period',
          title: 'Period',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'metricType',
      title: 'Metric Type',
      type: 'string',
      options: {
        list: [
          { title: 'Main', value: 'main' },
          { title: 'Detailed', value: 'detailed' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
  ],
});