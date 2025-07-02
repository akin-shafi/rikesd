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
  email?: string
  website?: string
  category: "governors" | "advisors" | "finance" | "experts" | "emt"
}

// Mock data - in real app, this would come from an API
const mockTeamMembers: TeamMember[] = [
  // Board of Governors
  {
    id: "gov-1",
    name: "Dr. Adaora Okonkwo",
    designation: "Chairman, Board of Governors",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Distinguished academic leader with over 20 years of experience in research governance and policy development. Former Vice-Chancellor of University of Lagos and current advisor to multiple African research institutions.",
    expertise: ["Research Governance", "Policy Development", "Academic Leadership", "Strategic Planning"],
    achievements: [
      "Led transformation of 3 major African universities",
      "Published 150+ peer-reviewed research papers",
      "Recipient of African Excellence in Education Award 2020",
      "Established 5 research centers across West Africa",
    ],
    linkedin: "https://linkedin.com/in/adaora-okonkwo",
    email: "adaora.okonkwo@rikesd.org",
    category: "governors",
  },
  {
    id: "gov-2",
    name: "Prof. Kwame Asante",
    designation: "Vice Chairman, Board of Governors",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Renowned researcher in sustainable development with extensive experience in Pan-African research initiatives. Former Director of African Development Research Institute.",
    expertise: ["Sustainable Development", "Research Strategy", "International Relations", "Innovation Policy"],
    achievements: [
      "Coordinated $50M+ in research funding across Africa",
      "Authored 8 books on sustainable development",
      "Advisor to African Union on research policy",
      "Founded 3 successful research startups",
    ],
    linkedin: "https://linkedin.com/in/kwame-asante",
    email: "kwame.asante@rikesd.org",
    category: "governors",
  },

  // Board of Advisors
  {
    id: "adv-1",
    name: "Prof. Ekanem Braide",
    designation: "Senior Advisor, Research Strategy",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading expert in research commercialization and technology transfer with 25+ years of experience bridging academia and industry across Africa.",
    expertise: ["Technology Transfer", "Research Commercialization", "Innovation Management", "Strategic Advisory"],
    achievements: [
      "Facilitated 200+ successful technology transfers",
      "Established 15 university-industry partnerships",
      "Generated $100M+ in research commercialization revenue",
      "Mentored 500+ researchers and entrepreneurs",
    ],
    linkedin: "https://linkedin.com/in/ekanem-braide",
    email: "ekanem.braide@rikesd.org",
    category: "advisors",
  },
  {
    id: "adv-2",
    name: "Dr. Fatima Al-Rashid",
    designation: "Advisor, International Partnerships",
    image: "/placeholder.svg?height=300&width=300",
    bio: "International development expert specializing in cross-border research collaborations and global partnership development. Former UN Research Coordinator.",
    expertise: ["International Development", "Partnership Development", "Cross-border Collaboration", "Grant Writing"],
    achievements: [
      "Secured $75M+ in international research grants",
      "Established partnerships with 50+ global institutions",
      "Led 25+ international research missions",
      "Fluent in 6 languages",
    ],
    linkedin: "https://linkedin.com/in/fatima-al-rashid",
    email: "fatima.alrashid@rikesd.org",
    category: "advisors",
  },

  // Board of Finance
  {
    id: "fin-1",
    name: "Dr. Rose Gidado",
    designation: "Chairman, Board of Finance Trustees",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Seasoned financial expert with deep expertise in research funding, impact investing, and sustainable development finance. Former CFO of major African development bank.",
    expertise: ["Research Funding", "Impact Investing", "Financial Management", "Sustainable Finance"],
    achievements: [
      "Managed $500M+ research investment portfolio",
      "Structured 100+ research funding deals",
      "Established 3 research-focused investment funds",
      "CFA Charter holder and certified impact investor",
    ],
    linkedin: "https://linkedin.com/in/rose-gidado",
    email: "rose.gidado@rikesd.org",
    category: "finance",
  },
  {
    id: "fin-2",
    name: "Mr. Chidi Okafor",
    designation: "Treasurer & Financial Advisor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Investment banking professional with 15+ years experience in venture capital and research commercialization funding across emerging markets.",
    expertise: ["Venture Capital", "Investment Banking", "Financial Analysis", "Risk Management"],
    achievements: [
      "Led $200M+ in research startup investments",
      "Advised 50+ research-based companies on funding",
      "Former VP at leading African investment bank",
      "MBA from Wharton School",
    ],
    linkedin: "https://linkedin.com/in/chidi-okafor",
    email: "chidi.okafor@rikesd.org",
    category: "finance",
  },

  // Board of Experts
  {
    id: "exp-1",
    name: "Dr. Amina Hassan",
    designation: "Lead Research Expert, Agricultural Innovation",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Agricultural research scientist and innovation expert with groundbreaking work in sustainable farming technologies and food security solutions across Africa.",
    expertise: ["Agricultural Innovation", "Food Security", "Sustainable Farming", "Research Methodology"],
    achievements: [
      "Developed 5 patented agricultural technologies",
      "Published 80+ research papers in top journals",
      "Led $30M agricultural research consortium",
      "Winner of African Innovation Prize 2019",
    ],
    linkedin: "https://linkedin.com/in/amina-hassan",
    email: "amina.hassan@rikesd.org",
    category: "experts",
  },
  {
    id: "exp-2",
    name: "Prof. Michael Chukwu",
    designation: "Environmental Science Expert",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Environmental scientist and sustainability expert leading research in climate change adaptation and environmental conservation across sub-Saharan Africa.",
    expertise: ["Environmental Science", "Climate Change", "Sustainability", "Conservation"],
    achievements: [
      "Led 20+ environmental research projects",
      "Advisor to 5 African governments on climate policy",
      "Published 120+ scientific papers",
      "Established 3 environmental research centers",
    ],
    linkedin: "https://linkedin.com/in/michael-chukwu",
    email: "michael.chukwu@rikesd.org",
    category: "experts",
  },

  // EMT Members
  {
    id: "emt-1",
    name: "Dolapo Omolukun",
    designation: "Acting Executive Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader driving RIKESD's mission to transform research into impactful solutions. Expert in program management, strategic planning, and research ecosystem development.",
    expertise: ["Executive Leadership", "Program Management", "Strategic Planning", "Research Ecosystem Development"],
    achievements: [
      "Led RIKESD's expansion to 25+ countries",
      "Launched 5 major research programs",
      "Secured $15M+ in organizational funding",
      "Mentored 1000+ researchers and entrepreneurs",
    ],
    linkedin: "https://linkedin.com/in/dolapo-omolukun",
    email: "dolapo.omolukun@rikesd.org",
    category: "emt",
  },
  {
    id: "emt-2",
    name: "Shafi Akinropo",
    designation: "Technology Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technology innovator and digital transformation expert leading RIKESD's technological initiatives and digital platform development.",
    expertise: ["Technology Leadership", "Digital Innovation", "Platform Development", "Technical Strategy"],
    achievements: [
      "Built RIKESD's digital ecosystem from ground up",
      "Led development of 10+ research platforms",
      "Former CTO at 2 successful tech startups",
      "Expert in AI and machine learning applications",
    ],
    linkedin: "https://linkedin.com/in/shafi-akinropo",
    email: "shafi.akinropo@rikesd.org",
    category: "emt",
  },
  {
    id: "emt-3",
    name: "Dr. Sarah Adebayo",
    designation: "Head of Programs",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Program development expert with extensive experience in designing and implementing research and innovation programs across Africa.",
    expertise: ["Program Development", "Innovation Management", "Capacity Building", "Research Training"],
    achievements: [
      "Designed 8 successful research programs",
      "Trained 2000+ researchers across Africa",
      "PhD in Innovation Management",
      "Former World Bank program consultant",
    ],
    linkedin: "https://linkedin.com/in/sarah-adebayo",
    email: "sarah.adebayo@rikesd.org",
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
