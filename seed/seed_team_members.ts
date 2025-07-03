// seedTeamMembers.js (or .ts)
import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid'; // Optional for generating unique _id

const client = createClient({
  projectId: "lwbnn2sj",
  dataset: "production",
  apiVersion: "2025-07-02",
  token: "sk3fpH2Bx5jTVthVosXaAqy4D3yDGO1W6QMQYXHiQZjjOjERv7JYI6QSLT7i9iAmjTkuPUtFuD3Xpxb5BJF0Xb9dLXHH4J8up8U93kGMoP9mcOaEwTVwKpr8fwP5YxTLPLyB0beqU7wl5H5ssL5XEeDE1fCuYi0UO5C6GJ5d6bkito7K6wTs",

  useCdn: false,
});



import mockTeamMembers from './mockTeamMembers'; // Or paste the array here


async function seedData() {
  for (const member of mockTeamMembers) {
    try {
      const doc = {
        _type: 'teamMember',
        _id: member.id || uuidv4(),
        name: member.name,
        designation: member.designation,
        image: member.image,
        bio: member.bio,
        expertise: member.expertise,
        achievements: member.achievements,
        linkedin: member.linkedin,
        twitter: member.twitter,
        category: member.category,
      };

      const res = await client.createIfNotExists(doc);
      console.log(`✅ Created: ${res.name}`);
    } catch (error) {
      console.error(`❌ Error for ${member.name}:`, error);
    }
  }

  console.log('🚀 Seeding complete');
}

seedData();