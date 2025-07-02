"use client"

import { useState, useEffect } from "react"

export interface Metric {
  id: string
  label: string
  value: number
  prefix?: string
  suffix?: string
  description?: string
  category: "research" | "partnerships" | "impact" | "global"
  lastUpdated: string
  trend?: {
    direction: "up" | "down" | "stable"
    percentage: number
    period: string
  }
}

// Mock data - in real app, this would come from an API
const mockMainMetrics: Metric[] = [
  {
    id: "research-projects",
    label: "Research Projects",
    value: 150,
    suffix: "+",
    description: "Active research projects across various domains",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 12,
      period: "last quarter",
    },
  },
  {
    id: "partner-organizations",
    label: "Partner Organizations",
    value: 50,
    suffix: "+",
    description: "Strategic partnerships with institutions worldwide",
    category: "partnerships",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 8,
      period: "last quarter",
    },
  },
  {
    id: "countries-reached",
    label: "Countries Reached",
    value: 25,
    suffix: "+",
    description: "Global reach across multiple continents",
    category: "global",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 15,
      period: "last year",
    },
  },
  {
    id: "lives-impacted",
    label: "Lives Impacted",
    value: 10000,
    suffix: "+",
    description: "Direct and indirect beneficiaries of our research",
    category: "impact",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 25,
      period: "last year",
    },
  },
]

const mockDetailedMetrics: Metric[] = [
  {
    id: "publications",
    label: "Publications",
    value: 100,
    suffix: "+",
    description: "Peer-reviewed publications and research papers",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
  },
  {
    id: "research-funding",
    label: "Research Funding",
    value: 15,
    prefix: "$",
    suffix: "M+",
    description: "Total research funding secured",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
  },
  {
    id: "mentors-advisors",
    label: "Mentors & Advisors",
    value: 1200,
    suffix: "+",
    description: "Expert network supporting our researchers",
    category: "partnerships",
    lastUpdated: "2025-01-02T12:00:00Z",
  },
  {
    id: "impact-value",
    label: "Estimated Impact Value",
    value: 50,
    prefix: "$",
    suffix: "M",
    description: "Economic value of research impact",
    category: "impact",
    lastUpdated: "2025-01-02T12:00:00Z",
  },
  {
    id: "events-hosted",
    label: "Events Hosted",
    value: 200,
    suffix: "+",
    description: "Research events and networking sessions",
    category: "global",
    lastUpdated: "2025-01-02T12:00:00Z",
  },
  {
    id: "researchers-trained",
    label: "Researchers Trained",
    value: 500,
    suffix: "+",
    description: "Researchers who completed our programs",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
  },
]

export function useMetrics() {
  const [mainMetrics, setMainMetrics] = useState<Metric[]>([])
  const [detailedMetrics, setDetailedMetrics] = useState<Metric[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMetrics()
  }, [])

  const fetchMetrics = async () => {
    try {
      setLoading(true)
      setError(null)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In real app, replace with actual API calls:
      // const mainResponse = await fetch('/api/metrics/main')
      // const detailedResponse = await fetch('/api/metrics/detailed')
      // const mainData = await mainResponse.json()
      // const detailedData = await detailedResponse.json()

      setMainMetrics(mockMainMetrics)
      setDetailedMetrics(mockDetailedMetrics)
    } catch (err) {
      setError("Failed to fetch metrics")
      console.error("Error fetching metrics:", err)
    } finally {
      setLoading(false)
    }
  }

  const getMetricById = (id: string): Metric | undefined => {
    return [...mainMetrics, ...detailedMetrics].find((metric) => metric.id === id)
  }

  const getMetricsByCategory = (category: Metric["category"]): Metric[] => {
    return [...mainMetrics, ...detailedMetrics].filter((metric) => metric.category === category)
  }

  const refreshMetrics = () => {
    fetchMetrics()
  }

  return {
    mainMetrics,
    detailedMetrics,
    loading,
    error,
    getMetricById,
    getMetricsByCategory,
    refreshMetrics,
  }
}
