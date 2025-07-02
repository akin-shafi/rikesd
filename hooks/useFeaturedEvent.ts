"use client"

import { useState, useEffect } from "react"
import type { Event } from "@/hooks/useEvents"

// Mock featured event data - in real app, this would come from an API
const mockFeaturedEvent: Event = {
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
}

export function useFeaturedEvent() {
  const [featuredEvent, setFeaturedEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFeaturedEvent()
  }, [])

  const fetchFeaturedEvent = async () => {
    try {
      setLoading(true)
      setError(null)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      // In real app, replace with actual API call:
      // const response = await fetch('/api/events/featured')
      // const data = await response.json()

      setFeaturedEvent(mockFeaturedEvent)
    } catch (err) {
      setError("Failed to fetch featured event")
      console.error("Error fetching featured event:", err)
    } finally {
      setLoading(false)
    }
  }

  const refreshFeaturedEvent = () => {
    fetchFeaturedEvent()
  }

  return {
    featuredEvent,
    loading,
    error,
    refreshFeaturedEvent,
  }
}
