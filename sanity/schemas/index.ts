import teams from './documents/teams';

export const schemaTypes = [
  // Singletons
  teams
];

// // schemas/schema.js
// import createSchema from 'part:@sanity/base/schema-creator'
// import schemaTypes from 'all:part:@sanity/base/schema-type'
// import teamMember from './documents/teams'

// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([
//     teamMember,
//     // Other schemas...
//   ]),
// })