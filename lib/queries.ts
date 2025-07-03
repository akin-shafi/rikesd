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



export async function getEvents() {
  const query = `*[_type == "event"]{
    _id,
    title,
    subtitle,
    date,
    time,
    duration,
    platform,
    type,
    featured,
    category,
    description,
    agenda,
    speakers[]{
      id,
      name,
      title,
      organization,
      bio,
      image,
      linkedIn,
      twitter,
      expertise
    },
    registrationUrl,
    tags,
    flyer,
    discussion{
      topic,
      summary,
      keyPoints,
      videoUrl
    },
    attendees,
    recording
  }`;
  const events = await sanityClient.fetch(query);
  return events;
}

export async function getPartners() {
  const query = `*[_type == "partner"]{
    _id,
    name,
    type,
    logo,
    location{
      city,
      state,
      country
    },
    website,
    established,
    description,
    partnershipSince,
    projects[]{
      id,
      name,
      description,
      status,
      startDate,
      endDate,
      budget,
      outcomes,
      technologies
    },
    contactPerson{
      name,
      title,
      email,
      phone
    },
    achievements,
    researchAreas,
    stats{
      students,
      faculty,
      publications,
      patents
    }
  }`;
  const partners = await sanityClient.fetch(query);
  return partners;
}