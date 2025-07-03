import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid';

const client = createClient({
  projectId: "lwbnn2sj",
  dataset: "production",
  apiVersion: "2025-07-02",
  token: "sk3fpH2Bx5jTVthVosXaAqy4D3yDGO1W6QMQYXHiQZjjOjERv7JYI6QSLT7i9iAmjTkuPUtFuD3Xpxb5BJF0Xb9dLXHH4J8up8U93kGMoP9mcOaEwTVwKpr8fwP5YxTLPLyB0beqU7wl5H5ssL5XEeDE1fCuYi0UO5C6GJ5d6bkito7K6wTs",
  useCdn: false,
});

const mockPartners = [
  {
    id: "unilag",
    name: "University of Lagos",
    type: "university",
    logo: "/placeholder.svg?height=120&width=120",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    website: "https://unilag.edu.ng",
    established: "1962",
    description:
      "Premier university in Nigeria with strong research focus in engineering, medicine, and social sciences. Leading institution in West Africa for academic excellence and innovation.",
    partnershipSince: "2018",
    projects: [
      {
        id: "unilag-proj-1",
        name: "Smart Campus Initiative",
        description: "Development of IoT-based campus management system for energy efficiency and security monitoring.",
        status: "active",
        startDate: "2023-01-15",
        endDate: "2025-12-31",
        budget: "$2.5M",
        outcomes: [
          "30% reduction in energy consumption",
          "Improved campus security monitoring",
          "Real-time facility management dashboard",
        ],
        technologies: ["IoT", "Machine Learning", "Cloud Computing", "Mobile Apps"],
      },
      {
        id: "unilag-proj-2",
        name: "Medical Research Database",
        description: "Comprehensive database system for medical research data management and analysis.",
        status: "completed",
        startDate: "2020-03-01",
        endDate: "2022-11-30",
        budget: "$1.8M",
        outcomes: [
          "Centralized medical research database",
          "50+ research papers published",
          "Improved data sharing protocols",
        ],
        technologies: ["Database Systems", "Data Analytics", "Web Development"],
      },
    ],
    contactPerson: {
      name: "Prof. Folasade Ogunsola",
      title: "Vice-Chancellor",
      email: "vc@unilag.edu.ng",
      phone: "+234-1-7749999",
    },
    achievements: [
      "Top-ranked_parallel",
      "Over 200 research publications annually",
      "Leading medical school in West Africa",
      "Strong industry partnerships",
    ],
    researchAreas: ["Medicine", "Engineering", "Social Sciences", "Environmental Studies", "Technology"],
    stats: {
      students: 57000,
      faculty: 1200,
      publications: 250,
      patents: 15,
    },
  },
  {
    id: "abu",
    name: "Ahmadu Bello University",
    type: "university",
    logo: "/placeholder.svg?height=120&width=120",
    location: {
      city: "Zaria",
      state: "Kaduna",
      country: "Nigeria",
    },
    website: "https://abu.edu.ng",
    established: "1962",
    description:
      "Largest university in Nigeria with comprehensive research programs in agriculture, engineering, and veterinary medicine. Pioneer in agricultural research and development.",
    partnershipSince: "2017",
    projects: [
      {
        id: "abu-proj-1",
        name: "Sustainable Agriculture Platform",
        description: "Digital platform connecting farmers with agricultural experts and market opportunities.",
        status: "active",
        startDate: "2022-06-01",
        endDate: "2024-12-31",
        budget: "$3.2M",
        outcomes: [
          "10,000+ farmers registered",
          "25% increase in crop yields",
          "Direct market access for smallholder farmers",
        ],
        technologies: ["Mobile Technology", "AI/ML", "Blockchain", "GIS Mapping"],
      },
      {
        id: "abu-proj-2",
        name: "Veterinary Telemedicine System",
        description: "Remote veterinary consultation system for livestock health management.",
        status: "completed",
        startDate: "2019-09-01",
        endDate: "2021-08-31",
        budget: "$1.5M",
        outcomes: [
          "Remote veterinary services to 500+ communities",
          "Reduced livestock mortality by 40%",
          "Training of 200+ veterinary technicians",
        ],
        technologies: ["Telemedicine", "Mobile Apps", "Video Conferencing"],
      },
    ],
    contactPerson: {
      name: "Prof. Kabir Bala",
      title: "Vice-Chancellor",
      email: "vc@abu.edu.ng",
      phone: "+234-69-550581",
    },
    achievements: [
      "Largest university in sub-Saharan Africa",
      "Leading agricultural research institution",
      "Strong veterinary medicine program",
      "Extensive alumni network across Africa",
    ],
    researchAreas: ["Agriculture", "Veterinary Medicine", "Engineering", "Medicine", "Environmental Science"],
    stats: {
      students: 75000,
      faculty: 1800,
      publications: 180,
      patents: 8,
    },
  },
  {
    id: "ui",
    name: "University of Ibadan",
    type: "university",
    logo: "/placeholder.svg?height=120&width=120",
    location: {
      city: "Ibadan",
      state: "Oyo",
      country: "Nigeria",
    },
    website: "https://ui.edu.ng",
    established: "1948",
    description:
      "First university in Nigeria with rich history in research and academic excellence. Leading institution in medical research, humanities, and social sciences.",
    partnershipSince: "2016",
    projects: [
      {
        id: "ui-proj-1",
        name: "Digital Health Records System",
        description: "Comprehensive electronic health records system for improved patient care and medical research.",
        status: "active",
        startDate: "2023-03-01",
        endDate: "2025-06-30",
        budget: "$2.8M",
        outcomes: [
          "Digitized 100,000+ patient records",
          "Improved clinical decision making",
          "Enhanced medical research capabilities",
        ],
        technologies: ["Healthcare IT", "Database Systems", "Security", "Analytics"],
      },
      {
        id: "ui-proj-2",
        name: "Tropical Disease Research Initiative",
        description: "Research program focused on tropical diseases affecting West African populations.",
        status: "completed",
        startDate: "2018-01-01",
        endDate: "2022-12-31",
        budget: "$4.1M",
        outcomes: [
          "15 new treatment protocols developed",
          "80+ research publications",
          "Training of 150+ medical researchers",
        ],
        technologies: ["Biotechnology", "Data Analysis", "Laboratory Systems"],
      },
    ],
    contactPerson: {
      name: "Prof. Kayode Adebowale",
      title: "Vice-Chancellor",
      email: "vc@ui.edu.ng",
      phone: "+234-2-8103043",
    },
    achievements: [
      "First university in Nigeria",
      "Premier medical school",
      "Strong research tradition",
      "Notable alumni in various fields",
    ],
    researchAreas: ["Medicine", "Public Health", "Humanities", "Social Sciences", "Agriculture"],
    stats: {
      students: 45000,
      faculty: 1100,
      publications: 220,
      patents: 12,
    },
  },
  {
    id: "covenant",
    name: "Covenant University",
    type: "university",
    logo: "/placeholder.svg?height=120&width=120",
    location: {
      city: "Ota",
      state: "Ogun",
      country: "Nigeria",
    },
    website: "https://covenantuniversity.edu.ng",
    established: "2002",
    description:
      "Leading private university in Nigeria with focus on technology, innovation, and entrepreneurship. Known for cutting-edge research and industry partnerships.",
    partnershipSince: "2019",
    projects: [
      {
        id: "covenant-proj-1",
        name: "Innovation Hub Development",
        description: "Establishment of technology innovation hub for student entrepreneurs and startups.",
        status: "active",
        startDate: "2022-09-01",
        endDate: "2024-08-31",
        budget: "$1.9M",
        outcomes: [
          "50+ student startups incubated",
          "Technology transfer programs established",
          "Industry mentorship network created",
        ],
        technologies: ["Startup Incubation", "Technology Transfer", "Mentorship Platforms"],
      },
    ],
    contactPerson: {
      name: "Prof. Abiodun Adebayo",
      title: "Vice-Chancellor",
      email: "vc@covenantuniversity.edu.ng",
      phone: "+234-1-7900724",
    },
    achievements: [
      "Top-ranked private university in Nigeria",
      "Strong industry partnerships",
      "High graduate employment rate",
      "Innovation and entrepreneurship focus",
    ],
    researchAreas: ["Engineering", "Computer Science", "Business", "Natural Sciences", "Social Sciences"],
    stats: {
      students: 18000,
      faculty: 450,
      publications: 120,
      patents: 25,
    },
  },
  {
    id: "futa",
    name: "Federal University of Technology, Akure",
    type: "university",
    logo: "/placeholder.svg?height=120&width=120",
    location: {
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
    },
    website: "https://futa.edu.ng",
    established: "1981",
    description:
      "Specialized technology university with focus on engineering, applied sciences, and technology innovation. Leading institution in technological research and development.",
    partnershipSince: "2020",
    projects: [
      {
        id: "futa-proj-1",
        name: "Renewable Energy Research Center",
        description: "Research and development of renewable energy solutions for rural communities.",
        status: "active",
        startDate: "2021-04-01",
        endDate: "2024-03-31",
        budget: "$2.1M",
        outcomes: [
          "Solar energy systems for 20+ communities",
          "Training of 100+ renewable energy technicians",
          "Development of low-cost solar solutions",
        ],
        technologies: ["Solar Energy", "Battery Systems", "Grid Integration", "IoT Monitoring"],
      },
    ],
    contactPerson: {
      name: "Prof. Adenike Oladiji",
      title: "Vice-Chancellor",
      email: "vc@futa.edu.ng",
      phone: "+234-34-230450",
    },
    achievements: [
      "Leading technology university",
      "Strong engineering programs",
      "Industry-focused research",
      "Technology transfer success",
    ],
    researchAreas: ["Engineering", "Applied Sciences", "Technology", "Environmental Studies", "Computer Science"],
    stats: {
      students: 28000,
      faculty: 680,
      publications: 95,
      patents: 18,
    },
  },
];

async function seedData() {
  for (const partner of mockPartners) {
    try {
      const doc = {
        _type: 'partner',
        _id: partner.id || uuidv4(),
        name: partner.name,
        type: partner.type,
        logo: partner.logo,
        location: partner.location,
        website: partner.website,
        established: partner.established,
        description: partner.description,
        partnershipSince: partner.partnershipSince,
        projects: partner.projects,
        contactPerson: partner.contactPerson,
        achievements: partner.achievements,
        researchAreas: partner.researchAreas,
        stats: partner.stats,
      };

      const res = await client.createIfNotExists(doc);
      console.log(`✅ Created: ${res.name}`);
    } catch (error) {
      console.error(`❌ Error for ${partner.name}:`, error);
    }
  }

  console.log('🚀 Seeding complete');
}

seedData();