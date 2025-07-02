"use client"

import { useState, useEffect } from "react"

export interface TeamMember {
  id: string
  name: string
  designation: string
  image: string
  bio: string
  expertise: string[]
  achievements: string[]
  linkedin?: string
  twitter?: string
  website?: string
  category: "governors" | "advisors" | "finance" | "experts" | "emt"
}

// Function to generate initials from a name
const generateInitials = (name: string): string => {
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

// Mock data - in real app, this would come from an API
const mockTeamMembers: TeamMember[] = [
  // Board of Governors
  {
    id: "gov-1",
    name: "Engr. Mansur Ahmed",
    designation: "Chairman, Board of Governors",
    image: generateInitials("Engr. Mansur Ahmed"), // MA
    bio: "Executive Director at Dangote Group and former President of Manufacturers Association of Nigeria (MAN). Experienced leader in industrial and economic development.",
    expertise: ["Industrial Leadership", "Economic Development", "Strategic Planning", "Corporate Governance"],
    achievements: [
      "Led major industrial initiatives at Dangote Group",
      "Former President of Manufacturers Association of Nigeria",
      "Contributed to national economic policy development",
      "Mentored numerous industry leaders",
    ],
    linkedin: "https://linkedin.com/in/mansur-ahmed",
    category: "governors",
  },
  {
    id: "gov-2",
    name: "Dr. Harriet Lonka",
    designation: "Co-Chair, Board of Governors",
    image: generateInitials("Dr. Harriet Lonka"), // HL
    bio: "Academic leader from Laurea University, Finland, specializing in research and innovation in higher education.",
    expertise: ["Academic Leadership", "Research Strategy", "Innovation in Education", "International Collaboration"],
    achievements: [
      "Developed innovative programs at Laurea University",
      "Published extensively in educational research",
      "Fostered international academic partnerships",
      "Advisor on global education strategies",
    ],
    linkedin: "https://linkedin.com/in/harriet-lonka",
    category: "governors",
  },
  {
    id: "gov-3",
    name: "Prof. Bello Shuaib Oricha",
    designation: "Member, Board of Governors",
    image: generateInitials("Prof. Bello Shuaib Oricha"), // BO
    bio: "Distinguished academic from Usmanu Danfodiyo University, Sokoto, Nigeria, with expertise in research governance and policy.",
    expertise: ["Research Governance", "Academic Administration", "Policy Development", "Educational Leadership"],
    achievements: [
      "Led research initiatives at UDUS",
      "Published numerous peer-reviewed papers",
      "Contributed to educational policy in Nigeria",
      "Mentored young academics",
    ],
    linkedin: "https://linkedin.com/in/bello-oricha",
    category: "governors",
  },
  {
    id: "gov-4",
    name: "Prof. Abubakar Sambo",
    designation: "Member, Board of Governors",
    image: generateInitials("Prof. Abubakar Sambo"), // AS
    bio: "Renowned Nigerian academic and researcher with extensive experience in energy research and policy development.",
    expertise: ["Energy Research", "Policy Development", "Academic Leadership", "Sustainable Development"],
    achievements: [
      "Advised on national energy policies",
      "Published extensively in energy research",
      "Led multiple research institutions",
      "Recipient of national academic awards",
    ],
    linkedin: "https://linkedin.com/in/abubakar-sambo",
    category: "governors",
  },
  {
    id: "gov-5",
    name: "Vice Chancellor, University of Abuja",
    designation: "Member, Board of Governors",
    image: generateInitials("Vice Chancellor, University of Abuja"), // UA
    bio: "Academic leader serving as Vice Chancellor of University of Abuja, with a focus on advancing research and education in Nigeria.",
    expertise: ["Academic Leadership", "Research Administration", "Educational Policy", "Institutional Development"],
    achievements: [
      "Transformed academic programs at University of Abuja",
      "Secured funding for research initiatives",
      "Published in top academic journals",
      "Led university accreditation efforts",
    ],
    linkedin: "https://linkedin.com/in/vc-uniabuja",
    category: "governors",
  },

  // Board of Advisors
  {
    id: "adv-1",
    name: "H.E. Ambassador Muhammad Makarfi",
    designation: "Chairman, Board of Advisors",
    image: generateInitials("H.E. Ambassador Muhammad Makarfi"), // MM
    bio: "Nigeria’s Ambassador to Brazil, with extensive experience in international diplomacy and research collaboration.",
    expertise: ["International Diplomacy", "Research Collaboration", "Policy Advisory", "Cross-border Partnerships"],
    achievements: [
      "Strengthened Nigeria-Brazil research ties",
      "Facilitated international research agreements",
      "Advised on global policy frameworks",
      "Promoted African research globally",
    ],
    linkedin: "https://linkedin.com/in/muhammad-makarfi",
    category: "advisors",
  },
  {
    id: "adv-2",
    name: "Prof. Ekanem Braide",
    designation: "Member, Board of Advisors",
    image: generateInitials("Prof. Ekanem Braide"), // EB
    bio: "President of NAS Nigeria, with expertise in research commercialization and technology transfer.",
    expertise: ["Technology Transfer", "Research Commercialization", "Innovation Management", "Strategic Advisory"],
    achievements: [
      "Facilitated 200+ technology transfers",
      "Established university-industry partnerships",
      "Generated significant research revenue",
      "Mentored numerous researchers",
    ],
    linkedin: "https://linkedin.com/in/ekanem-braide",
    category: "advisors",
  },
  {
    id: "adv-3",
    name: "H.E. Ambassador David Doyle",
    designation: "Member, Board of Advisors",
    image: generateInitials("H.E. Ambassador David Doyle"), // DD
    bio: "Ambassador to UNESCO, specializing in international research and cultural collaborations.",
    expertise: ["International Relations", "Research Advocacy", "Cultural Diplomacy", "Global Partnerships"],
    achievements: [
      "Led UNESCO research initiatives",
      "Fostered global cultural collaborations",
      "Advised on international education policies",
      "Promoted research equity",
    ],
    linkedin: "https://linkedin.com/in/david-doyle",
    category: "advisors",
  },
  {
    id: "adv-4",
    name: "Prof. Atwa Atwa",
    designation: "Member, Board of Advisors",
    image: generateInitials("Prof. Atwa Atwa"), // AA
    bio: "Director at ARC Egypt, with expertise in agricultural research and innovation.",
    expertise: ["Agricultural Research", "Innovation Strategy", "Research Management", "Policy Development"],
    achievements: [
      "Led major agricultural research projects",
      "Published extensively in agricultural science",
      "Advised on Egyptian research policy",
      "Developed innovative farming solutions",
    ],
    linkedin: "https://linkedin.com/in/atwa-atwa",
    category: "advisors",
  },
  {
    id: "adv-5",
    name: "Prof. Margaret Khaitsa",
    designation: "Member, Board of Advisors",
    image: generateInitials("Prof. Margaret Khaitsa"), // MK
    bio: "Professor at Mississippi State University, USA, specializing in veterinary science and research.",
    expertise: ["Veterinary Science", "Research Methodology", "Global Health", "Academic Collaboration"],
    achievements: [
      "Published 100+ research papers",
      "Led international veterinary research projects",
      "Mentored global researchers",
      "Contributed to global health policies",
    ],
    linkedin: "https://linkedin.com/in/margaret-khaitsa",
    category: "advisors",
  },
  {
    id: "adv-6",
    name: "Dr. Nick Nwakpa",
    designation: "Member, Board of Advisors",
    image: generateInitials("Dr. Nick Nwakpa"), // NN
    bio: "African Union representative with expertise in research policy and international development.",
    expertise: ["Research Policy", "International Development", "African Union Collaboration", "Grant Management"],
    achievements: [
      "Advised African Union on research strategies",
      "Secured major research grants",
      "Led pan-African research initiatives",
      "Promoted research capacity building",
    ],
    linkedin: "https://linkedin.com/in/nick-nwakpa",
    category: "advisors",
  },
  {
    id: "adv-7",
    name: "Prof. Conrad Asotie Omonhinmin",
    designation: "Member, Board of Advisors",
    image: generateInitials("Prof. Conrad Asotie Omonhinmin"), // CO
    bio: "Professor at Covenant University, Nigeria, specializing in research and academic innovation.",
    expertise: ["Academic Innovation", "Research Strategy", "Educational Leadership", "Policy Development"],
    achievements: [
      "Published extensively in academic journals",
      "Led research programs at Covenant University",
      "Mentored young academics",
      "Contributed to Nigerian education policy",
    ],
    linkedin: "https://linkedin.com/in/conrad-omonhinmin",
    category: "advisors",
  },
  {
    id: "adv-8",
    name: "Mrs. Rabiat Yetunde Popoola",
    designation: "Member, Board of Advisors",
    image: generateInitials("Mrs. Rabiat Yetunde Popoola"), // RP
    bio: "Expert in physiotherapy and health research, contributing to innovative health solutions in Nigeria.",
    expertise: ["Health Research", "Physiotherapy", "Innovation in Healthcare", "Capacity Building"],
    achievements: [
      "Developed innovative physiotherapy programs",
      "Trained healthcare professionals",
      "Published in health research journals",
      "Led community health initiatives",
    ],
    linkedin: "https://linkedin.com/in/rabiat-popoola",
    category: "advisors",
  },
  {
    id: "adv-9",
    name: "Prof. Funmi Adebambo",
    designation: "Co-Chair, Board of Advisors",
    image: generateInitials("Prof. Funmi Adebambo"), // FA
    bio: "Expert in research and innovation, with a focus on advancing African academic ecosystems.",
    expertise: ["Research Innovation", "Academic Leadership", "Capacity Building", "Strategic Planning"],
    achievements: [
      "Led major research initiatives in Nigeria",
      "Published in top academic journals",
      "Mentored numerous researchers",
      "Contributed to academic policy development",
    ],
    linkedin: "https://linkedin.com/in/funmi-adebambo",
    category: "advisors",
  },

  // Board of Finance
  {
    id: "fin-1",
    name: "Prof. S. E. Bogoro",
    designation: "Chairman, Board of Finance Trustees",
    image: generateInitials("Prof. S. E. Bogoro"), // SB
    bio: "Distinguished academic and financial expert from Karl Kum University, Nigeria, with expertise in research funding.",
    expertise: ["Research Funding", "Financial Management", "Impact Investing", "Sustainable Finance"],
    achievements: [
      "Managed large-scale research investment portfolios",
      "Structured multiple research funding deals",
      "Established research-focused investment funds",
      "Recognized financial leader in academia",
    ],
    linkedin: "https://linkedin.com/in/s-bogoro",
    category: "finance",
  },
  {
    id: "fin-2",
    name: "Prof. Muhammed Haruna",
    designation: "Co-Chair, Board of Finance Trustees",
    image: generateInitials("Prof. Muhammed Haruna"), // MH
    bio: "Executive Vice Chairman/CEO of NASENI Nigeria, with expertise in research funding and innovation financing.",
    expertise: ["Research Funding", "Innovation Financing", "Financial Strategy", "Technology Investment"],
    achievements: [
      "Led NASENI’s innovation funding initiatives",
      "Secured significant research investments",
      "Advised on national innovation policies",
      "Published in financial research",
    ],
    linkedin: "https://linkedin.com/in/muhammed-haruna",
    category: "finance",
  },
  {
    id: "fin-3",
    name: "Dr. Nicholas Ozor",
    designation: "Member, Board of Finance Trustees",
    image: generateInitials("Dr. Nicholas Ozor"), // NO
    bio: "Executive Director at ATPS, Kenya, specializing in research funding and policy development.",
    expertise: ["Research Funding", "Policy Development", "Financial Analysis", "Sustainable Development"],
    achievements: [
      "Secured major research grants in Africa",
      "Led ATPS funding initiatives",
      "Published in research policy journals",
      "Advised on African research funding",
    ],
    linkedin: "https://linkedin.com/in/nicholas-ozor",
    category: "finance",
  },
  {
    id: "fin-4",
    name: "Dr. Rose Gidado",
    designation: "Member, Board of Finance Trustees",
    image: generateInitials("Dr. Rose Gidado"), // RG
    bio: "OFAB Country Director, Nigeria, with expertise in research funding and sustainable development finance.",
    expertise: ["Research Funding", "Sustainable Finance", "Financial Management", "Agricultural Research"],
    achievements: [
      "Led OFAB’s research funding initiatives",
      "Structured agricultural research funding deals",
      "Published in financial and agricultural journals",
      "Mentored researchers in funding strategies",
    ],
    linkedin: "https://linkedin.com/in/rose-gidado",
    category: "finance",
  },
  {
    id: "fin-5",
    name: "Nabil Ksibi",
    designation: "Member, Board of Finance Trustees",
    image: generateInitials("Nabil Ksibi"), // NK
    bio: "ORCID representative from South Africa, specializing in research funding and digital identity solutions.",
    expertise: ["Research Funding", "Digital Identity", "Financial Strategy", "Innovation Financing"],
    achievements: [
      "Led ORCID’s funding initiatives",
      "Developed digital identity solutions for research",
      "Advised on research funding policies",
      "Published in research finance",
    ],
    linkedin: "https://linkedin.com/in/nabil-ksibi",
    category: "finance",
  },
  {
    id: "fin-6",
    name: "Dr. Grace Murilla",
    designation: "Member, Board of Finance Trustees",
    image: generateInitials("Dr. Grace Murilla"), // GM
    bio: "Financial expert with a focus on research funding and sustainable development in Africa.",
    expertise: ["Research Funding", "Sustainable Development", "Financial Management", "Grant Administration"],
    achievements: [
      "Secured funding for African research projects",
      "Advised on financial sustainability",
      "Published in research finance",
      "Mentored financial researchers",
    ],
    linkedin: "https://linkedin.com/in/grace-murilla",
    category: "finance",
  },

  // Board of Experts
  {
    id: "exp-1",
    name: "Prof. Dr. Mohammed Soliman",
    designation: "Chairman, Board of Experts",
    image: generateInitials("Prof. Dr. Mohammed Soliman"), // MS
    bio: "President of ARC, Egypt, with groundbreaking work in agricultural research and innovation.",
    expertise: ["Agricultural Innovation", "Research Leadership", "Sustainable Farming", "Policy Development"],
    achievements: [
      "Developed patented agricultural technologies",
      "Published extensively in top journals",
      "Led major agricultural research consortia",
      "Recipient of innovation awards",
    ],
    linkedin: "https://linkedin.com/in/mohammed-soliman",
    category: "experts",
  },
  {
    id: "exp-2",
    name: "Prof. Babatunde Salako",
    designation: "Co-Chair, Board of Experts",
    image: generateInitials("Prof. Babatunde Salako"), // BS
    bio: "Director General of Nigeria Medical Research Institute, specializing in medical research and innovation.",
    expertise: ["Medical Research", "Health Innovation", "Research Management", "Policy Advisory"],
    achievements: [
      "Led major medical research projects",
      "Published 100+ research papers",
      "Advised on national health policies",
      "Developed medical research frameworks",
    ],
    linkedin: "https://linkedin.com/in/babatunde-salako",
    category: "experts",
  },
  {
    id: "exp-3",
    name: "Prof. Abiodun Aibinu",
    designation: "Member, Board of Experts",
    image: generateInitials("Prof. Abiodun Aibinu"), // AA
    bio: "Vice Chancellor of Summit University, Nigeria, with expertise in technology and research innovation.",
    expertise: ["Technology Innovation", "Research Leadership", "Academic Administration", "Engineering Research"],
    achievements: [
      "Led technology research initiatives",
      "Published in engineering journals",
      "Mentored technology researchers",
      "Developed innovative academic programs",
    ],
    linkedin: "https://linkedin.com/in/abiodun-aibinu",
    category: "experts",
  },
  {
    id: "exp-4",
    name: "Prof. Charles Ruranga",
    designation: "Member, Board of Experts",
    image: generateInitials("Prof. Charles Ruranga"), // CR
    bio: "Director of ACE Data Science, University of Rwanda, specializing in data science and research.",
    expertise: ["Data Science", "Research Methodology", "Academic Leadership", "Innovation"],
    achievements: [
      "Led data science research programs",
      "Published in data science journals",
      "Developed data-driven solutions",
      "Mentored data scientists",
    ],
    linkedin: "https://linkedin.com/in/charles-ruranga",
    category: "experts",
  },
  {
    id: "exp-5",
    name: "Dr. Yemi Akinbamijo",
    designation: "Member, Board of Experts",
    image: generateInitials("Dr. Yemi Akinbamijo"), // YA
    bio: "FARA representative at the African Union, with expertise in agricultural research and policy.",
    expertise: ["Agricultural Research", "Policy Development", "Food Security", "Research Management"],
    achievements: [
      "Led pan-African agricultural research",
      "Advised on AU agricultural policies",
      "Published in agricultural journals",
      "Secured research funding",
    ],
    linkedin: "https://linkedin.com/in/yemi-akinbamijo",
    category: "experts",
  },
  {
    id: "exp-6",
    name: "Ms. Joy Owango",
    designation: "Member, Board of Experts",
    image: generateInitials("Ms. Joy Owango"), // JO
    bio: "Executive Director of TCC, Kenya, specializing in research training and capacity building.",
    expertise: ["Research Training", "Capacity Building", "Research Communication", "Innovation"],
    achievements: [
      "Trained thousands of African researchers",
      "Developed research communication platforms",
      "Led TCC’s capacity-building initiatives",
      "Published in research training",
    ],
    linkedin: "https://linkedin.com/in/joy-owango",
    category: "experts",
  },
  {
    id: "exp-7",
    name: "Sir Henry Eteama",
    designation: "Member, Board of Experts",
    image: generateInitials("Sir Henry Eteama"), // HE
    bio: "NPC for EU-Horizon Project, Nigeria, with expertise in research project management.",
    expertise: ["Project Management", "Research Coordination", "Innovation", "Policy Advisory"],
    achievements: [
      "Led EU-Horizon research projects",
      "Coordinated international research teams",
      "Published in project management",
      "Advised on research policies",
    ],
    linkedin: "https://linkedin.com/in/henry-eteama",
    category: "experts",
  },
  {
    id: "exp-8",
    name: "Ass. Prof. Jean Feugang",
    designation: "Member, Board of Experts",
    image: generateInitials("Ass. Prof. Jean Feugang"), // JF
    bio: "Associate Professor at Mississippi State University, USA, specializing in veterinary research.",
    expertise: ["Veterinary Research", "Biotechnology", "Research Methodology", "Academic Collaboration"],
    achievements: [
      "Published extensively in veterinary science",
      "Led biotechnology research projects",
      "Mentored global researchers",
      "Contributed to research policy",
    ],
    linkedin: "https://linkedin.com/in/jean-feugang",
    category: "experts",
  },
  {
    id: "exp-9",
    name: "AVM Jomo Osahor (RTD)",
    designation: "Member, Board of Experts",
    image: generateInitials("AVM Jomo Osahor (RTD)"), // JO
    bio: "Retired Air Vice Marshal from Nigeria, with expertise in strategic research and policy.",
    expertise: ["Strategic Research", "Policy Development", "Security Research", "Leadership"],
    achievements: [
      "Advised on national security research",
      "Led strategic research initiatives",
      "Published in security studies",
      "Mentored military researchers",
    ],
    linkedin: "https://linkedin.com/in/jomo-osahor",
    category: "experts",
  },
  {
    id: "exp-10",
    name: "Dr. Seye Awojobi",
    designation: "Member, Board of Experts",
    image: generateInitials("Dr. Seye Awojobi"), // SA
    bio: "Nigerian researcher with expertise in health and innovation research.",
    expertise: ["Health Research", "Innovation", "Research Methodology", "Capacity Building"],
    achievements: [
      "Led health research projects",
      "Published in health journals",
      "Developed innovative health solutions",
      "Mentored young researchers",
    ],
    linkedin: "https://linkedin.com/in/seye-awojobi",
    category: "experts",
  },

  // EMT Members
  {
    id: "emt-1",
    name: "Mrs. Dolapo Olusanmokun",
    designation: "Acting Executive Director",
    image: generateInitials("Dolapo Olusanmokun"), // DO
    bio: "Visionary leader driving RIKESD's mission to transform research into impactful solutions. Expert in program management, strategic planning, and research ecosystem development.",
    expertise: ["Executive Leadership", "Program Management", "Strategic Planning", "Research Ecosystem Development"],
    achievements: [
      "Led RIKESD's expansion to 25+ countries",
      "Launched 5 major research programs",
      "Secured $15M+ in organizational funding",
      "Mentored 1000+ researchers and entrepreneurs",
    ],
    linkedin: "https://linkedin.com/in/dolapo-omolukun",
    category: "emt",
  },
  {
    id: "emt-2",
    name: "Mr. Shafi Akinropo",
    designation: "Technology Lead",
    image: generateInitials("Shafi Akinropo"), // SA
    bio: "Technology innovator and digital transformation expert leading RIKESD's technological initiatives and digital platform development.",
    expertise: ["Technology Leadership", "Digital Innovation", "Platform Development", "Technical Strategy"],
    achievements: [
      "Built RIKESD's digital ecosystem from ground up",
      "Led development of 10+ research platforms",
      "Former CTO at 2 successful tech startups",
      "Expert in AI and machine learning applications",
    ],
    linkedin: "https://linkedin.com/in/shafi-akinropo",
    category: "emt",
  },
  {
    id: "emt-3",
    name: "Mr. John Mbiimbe",
    designation: "Product Lead",
    image: generateInitials("John Mbiimbe"), // JM
    bio: "Product development expert with extensive experience in designing and implementing research and innovation products across Africa.",
    expertise: ["Product Development", "Innovation Management", "Capacity Building", "Research Training"],
    achievements: [
      "Designed 8 successful research programs",
      "Trained 2000+ researchers across Africa",
      "PhD in Innovation Management",
      "Former World Bank program consultant",
    ],
    linkedin: "https://linkedin.com/in/john-mbimpe",
    category: "emt",
  },
  {
    id: "emt-4",
    name: "Barr. Adio Muritala",
    designation: "Legal Practitioner",
    image: generateInitials("Adio Muritala"), // BA
    bio: "Experienced legal practitioner specializing in research compliance, intellectual property, and organizational governance.",
    expertise: ["Legal Compliance", "Intellectual Property", "Corporate Governance", "Contract Law"],
    achievements: [
      "Advised on legal frameworks for research institutions",
      "Developed IP protection strategies",
      "Supported organizational compliance programs",
      "Mentored legal professionals",
    ],
    linkedin: "https://linkedin.com/in/barr-adio",
    category: "emt",
  },
  {
    id: "emt-5",
    name: "Mr. Luqmon Popoola",
    designation: "Skillnovate Champion",
    image: generateInitials("Luqmon Popoola"), // LP
    bio: "Champion of skill development and innovation training, leading Skillnovate initiatives for RIKESD.",
    expertise: ["Skill Development", "Innovation Training", "Capacity Building", "Program Leadership"],
    achievements: [
      "Launched Skillnovate training programs",
      "Trained 1000+ innovators across Africa",
      "Developed skill-building curricula",
      "Promoted entrepreneurship initiatives",
    ],
    linkedin: "https://linkedin.com/in/luqmon-popoola",
    category: "emt",
  },
  {
    id: "emt-6",
    name: "Hajia Saidat Shonaiki",
    designation: "KEIA Champion",
    image: generateInitials("Hajia Saidat Shonaiki"), // SS
    bio: "Leader of KEIA initiatives, focusing on knowledge exchange and innovation advancement across Africa.",
    expertise: ["Knowledge Exchange", "Innovation Advancement", "Program Management", "Community Engagement"],
    achievements: [
      "Led KEIA initiatives for research collaboration",
      "Facilitated knowledge exchange programs",
      "Built community innovation networks",
      "Mentored emerging innovators",
    ],
    linkedin: "https://linkedin.com/in/saidat-shonaiki",
    category: "emt",
  },
  {
    id: "emt-7",
    name: "Hajia Halimat Ibrahim",
    designation: "Communication Lead",
    image: generateInitials("Hajia Halimat Ibrahim"), // HI
    bio: "Expert in strategic communications, leading RIKESD's efforts to promote research and innovation.",
    expertise: ["Strategic Communications", "Public Relations", "Research Advocacy", "Media Strategy"],
    achievements: [
      "Developed RIKESD’s communication strategy",
      "Promoted research through media campaigns",
      "Built partnerships with media outlets",
      "Enhanced organizational visibility",
    ],
    linkedin: "https://linkedin.com/in/halimat-ibrahim",
    category: "emt",
  },
  {
    id: "emt-8",
    name: "Mr. Salami Kehind",
    designation: "Human Resource Lead",
    image: generateInitials("Salami Kehind"), // SK
    bio: "Human resources expert managing RIKESD’s talent acquisition and organizational development.",
    expertise: ["Human Resources", "Talent Management", "Organizational Development", "Employee Engagement"],
    achievements: [
      "Developed HR policies for RIKESD",
      "Recruited top talent for research programs",
      "Implemented employee development programs",
      "Fostered inclusive workplace culture",
    ],
    linkedin: "https://linkedin.com/in/salami-kehind",
    category: "emt",
  },
  {
    id: "emt-9",
    name: "Mr. Jamaldeen Lawal",
    designation: "Media Lead",
    image: generateInitials("Jamaldeen Lawal"), // JL
    bio: "Media expert leading RIKESD’s digital and traditional media strategies to amplify research impact.",
    expertise: ["Media Strategy", "Digital Marketing", "Content Creation", "Public Relations"],
    achievements: [
      "Led RIKESD’s media campaigns",
      "Developed digital content strategies",
      "Increased media presence for research initiatives",
      "Managed social media platforms",
    ],
    linkedin: "https://linkedin.com/in/jamaldeen-lawal",
    category: "emt",
  },
  {
    id: "emt-10",
    name: "Mr. Bebel",
    designation: "Member, EMT",
    image: generateInitials("Mr. Bebel"), // MB
    bio: "Key contributor to RIKESD’s executive management, supporting strategic initiatives and operations.",
    expertise: ["Strategic Planning", "Operations Management", "Program Support", "Organizational Leadership"],
    achievements: [
      "Supported RIKESD’s operational strategies",
      "Contributed to program development",
      "Enhanced organizational efficiency",
      "Mentored team members",
    ],
    linkedin: "https://linkedin.com/in/mr-bebel",
    category: "emt",
  },
]

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call
    const fetchTeamMembers = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setTeamMembers(mockTeamMembers)
      } catch (err) {
        setError("Failed to fetch team members")
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  const getTeamMembersByCategory = (category: TeamMember["category"]): TeamMember[] => {
    return teamMembers.filter((member) => member.category === category)
  }

  const getTeamMemberById = (id: string): TeamMember | undefined => {
    return teamMembers.find((member) => member.id === id)
  }

  return {
    teamMembers,
    loading,
    error,
    getTeamMembersByCategory,
    getTeamMemberById,
  }
}