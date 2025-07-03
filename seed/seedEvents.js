import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid';

const client = createClient({
  projectId: "lwbnn2sj",
  dataset: "production",
  apiVersion: "2025-07-02",
  token: "sk3fpH2Bx5jTVthVosXaAqy4D3yDGO1W6QMQYXHiQZjjOjERv7JYI6QSLT7i9iAmjTkuPUtFuD3Xpxb5BJF0Xb9dLXHH4J8up8U93kGMoP9mcOaEwTVwKpr8fwP5YxTLPLyB0beqU7wl5H5ssL5XEeDE1fCuYi0UO5C6GJ5d6bkito7K6wTs",
  useCdn: false,
});

const mockEvents = [
  {
    id: "s2b-43",
    title: "S2B#43: The Science Technology & Innovation to Business",
    subtitle: "RIKE Marketplace Hosts AroFarmer Project of BetaDay - Stakeholder Engagement",
    date: "2025-07-05",
    time: "09:30",
    duration: "2 hours",
    platform: "Zoom",
    type: "upcoming",
    featured: true,
    category: "S2B Series",
    description:
      "Join our flagship S2B session featuring stakeholder engagement for the AroFarmer Project. This session will explore the intersection of agricultural technology, marketplace dynamics, and sustainable development through the lens of our BetaDay initiative.",
    agenda: [
      "Opening Remarks and Introduction",
      "AroFarmer Project Overview",
      "Stakeholder Engagement Strategies",
      "Marketplace Integration Discussion",
      "Q&A and Networking Session",
    ],
    speakers: [
      {
        id: "jhon-mbiimbe",
        name: "Jhon P. Mbiimbe",
        title: "Moderator S2B",
        organization: "RIKESD",
        bio: "Experienced moderator and research advocate with over 10 years in facilitating academic-industry partnerships.",
        image: "/placeholder.svg?height=150&width=150",
        linkedIn: "https://linkedin.com/in/jhon-mbiimbe",
        expertise: ["Moderation", "Research Communication", "Partnership Development"],
      },
      {
        id: "ekanem-braide",
        name: "Prof. Ekanem Braide",
        title: "Member, Board of Advisors",
        organization: "RIKESD",
        bio: "Distinguished professor and board member with extensive experience in research governance and strategic advisory roles.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["Research Governance", "Strategic Advisory", "Academic Leadership"],
      },
      {
        id: "rose-gidado",
        name: "Dr. Rose Gidado",
        title: "Member, Board of Finance Trustees",
        organization: "RIKESD",
        bio: "Financial expert and trustee specializing in research funding and sustainable development finance.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["Research Funding", "Financial Management", "Sustainable Development"],
      },
      {
        id: "dolapo-omolukun",
        name: "Dolapo Omolukun",
        title: "AG. ED RIKESD/Convener S2B",
        organization: "RIKESD",
        bio: "Acting Executive Director and S2B series convener, leading RIKESD's mission to bridge research and business applications.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["Executive Leadership", "Research-Business Bridge", "Program Management"],
      },
      {
        id: "saidat-shonoiki",
        name: "Saidat Shonoiki",
        title: "Executive Director",
        organization: "Greenskill Centre",
        bio: "Environmental sustainability expert and executive director focused on green skills development and sustainable practices.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["Environmental Sustainability", "Green Skills", "Capacity Building"],
      },
      {
        id: "shafi-akinropo",
        name: "Shafi Akinropo",
        title: "Technology Lead",
        organization: "RIKESD",
        bio: "Technology leader driving digital innovation and technical solutions for research and development initiatives.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["Technology Leadership", "Digital Innovation", "Technical Solutions"],
      },
    ],
    registrationUrl: "https://zoom.us/webinar/register/s2b43",
    tags: ["S2B", "BetaDay", "AfrikaRIDE2.0", "AroFarmer", "Stakeholder Engagement"],
    flyer: "/s2b-event-flyer.jpg",
  },
  {
    id: "s2b-42",
    title: "S2B#42: Sustainable Agriculture Innovation",
    subtitle: "From Research to Market: Agricultural Technology Solutions",
    date: "2025-06-07",
    time: "09:30",
    duration: "2 hours",
    platform: "Zoom",
    type: "past",
    featured: false,
    category: "S2B Series",
    description:
      "This session explored innovative agricultural technologies and their path from research laboratories to market implementation.",
    agenda: [
      "Agricultural Innovation Landscape",
      "Technology Transfer Mechanisms",
      "Market Readiness Assessment",
      "Funding Opportunities",
      "Success Stories and Case Studies",
    ],
    speakers: [
      {
        id: "dr-adebayo",
        name: "Dr. Adebayo Ogundimu",
        title: "Agricultural Research Scientist",
        organization: "University of Ibadan",
        bio: "Leading researcher in sustainable agriculture with focus on crop optimization and soil health management.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["Sustainable Agriculture", "Crop Science", "Soil Management"],
      },
      {
        id: "fatima-hassan",
        name: "Fatima Hassan",
        title: "AgTech Entrepreneur",
        organization: "GreenHarvest Solutions",
        bio: "Serial entrepreneur in agricultural technology with successful exits and current focus on precision farming.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["AgTech Innovation", "Precision Farming", "Entrepreneurship"],
      },
    ],
    tags: ["S2B", "Agriculture", "Innovation", "Technology Transfer"],
    attendees: 245,
    recording: "https://youtube.com/watch?v=example42",
    discussion: {
      topic: "Bridging the Gap Between Agricultural Research and Commercial Application",
      summary:
        "The session highlighted key challenges in translating agricultural research into viable commercial products. Speakers emphasized the importance of early market validation, stakeholder engagement, and sustainable funding models.",
      keyPoints: [
        "Market validation should begin during the research phase",
        "Collaboration between researchers and farmers is crucial for practical solutions",
        "Government policies play a significant role in technology adoption",
        "Sustainable funding models are essential for long-term success",
        "Digital platforms can accelerate technology transfer processes",
      ],
      videoUrl: "https://youtube.com/watch?v=example42",
    },
  },
  {
    id: "s2b-41",
    title: "S2B#41: Digital Health Innovation in Africa",
    subtitle: "Leveraging Technology for Healthcare Transformation",
    date: "2025-05-03",
    time: "09:30",
    duration: "2 hours",
    platform: "Zoom",
    type: "past",
    featured: false,
    category: "S2B Series",
    description:
      "An in-depth exploration of digital health innovations across Africa and their potential for scaling healthcare solutions.",
    agenda: [
      "Digital Health Landscape in Africa",
      "Telemedicine and Remote Care",
      "Health Data Management",
      "Regulatory Considerations",
      "Investment and Scaling Opportunities",
    ],
    speakers: [
      {
        id: "dr-kemi-adeola",
        name: "Dr. Kemi Adeola",
        title: "Digital Health Specialist",
        organization: "Lagos University Teaching Hospital",
        bio: "Pioneer in digital health implementation with expertise in telemedicine and health informatics systems.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["Digital Health", "Telemedicine", "Health Informatics"],
      },
      {
        id: "michael-okafor",
        name: "Michael Okafor",
        title: "HealthTech Investor",
        organization: "African Health Ventures",
        bio: "Investment professional focused on healthcare technology startups across sub-Saharan Africa.",
        image: "/placeholder.svg?height=150&width=150",
        expertise: ["HealthTech Investment", "Venture Capital", "Healthcare Strategy"],
      },
    ],
    tags: ["S2B", "Digital Health", "Healthcare", "Technology", "Africa"],
    attendees: 312,
    recording: "https://youtube.com/watch?v=example41",
    discussion: {
      topic: "Scaling Digital Health Solutions Across African Markets",
      summary:
        "The discussion centered on the unique challenges and opportunities in African digital health markets. Key themes included infrastructure limitations, regulatory harmonization, and the potential for leapfrog innovations.",
      keyPoints: [
        "Mobile-first solutions are crucial for African markets",
        "Regulatory frameworks need to evolve with technology",
        "Public-private partnerships can accelerate adoption",
        "Local content and language support are essential",
        "Data privacy and security remain top concerns",
      ],
      videoUrl: "https://youtube.com/watch?v=example41",
    },
  },
];

async function seedData() {
  for (const event of mockEvents) {
    try {
      const doc = {
        _type: 'event',
        _id: event.id || uuidv4(),
        title: event.title,
        subtitle: event.subtitle,
        date: event.date,
        time: event.time,
        duration: event.duration,
        platform: event.platform,
        type: event.type,
        featured: event.featured,
        category: event.category,
        description: event.description,
        agenda: event.agenda,
        speakers: event.speakers,
        registrationUrl: event.registrationUrl,
        tags: event.tags,
        flyer: event.flyer,
        discussion: event.discussion,
        attendees: event.attendees,
        recording: event.recording,
      };

      const res = await client.createIfNotExists(doc);
      console.log(`✅ Created: ${res.title}`);
    } catch (error) {
      console.error(`❌ Error for ${event.title}:`, error);
    }
  }

  console.log('🚀 Seeding complete');
}

seedData();