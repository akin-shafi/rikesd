// lib/queries.js
import { client } from "./sanityClient";

export async function getTeamMembers() {
  const query = `*[_type == "teamMember"]{
    _id,
    name,
    designation,
    image,
    bio,
    expertise,
    achievements,
    linkedin,
    twitter,
    category
  }`;
  const teamMembers = await client.fetch(query);
  return teamMembers;
}