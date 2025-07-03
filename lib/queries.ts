import sanityClient from './sanity';

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
  const teamMembers = await sanityClient.fetch(query);
  return teamMembers;
}