"use client";

import { useState, useEffect } from "react";
import { getMetrics } from "@/lib/queries";

export interface Metric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description?: string;
  category: "research" | "partnerships" | "impact" | "global";
  lastUpdated: string;
  trend?: {
    direction: "up" | "down" | "stable";
    percentage: number;
    period: string;
  };
  metricType: "main" | "detailed";
}

export function useMetrics() {
  const [mainMetrics, setMainMetrics] = useState<Metric[]>([]);
  const [detailedMetrics, setDetailedMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getMetrics();
      // Map _id to id to match the Metric interface
      const metrics = data.map((metric: { _id: any }) => ({ ...metric, id: metric._id }));
      setMainMetrics(metrics.filter((metric: Metric) => metric.metricType === "main"));
      setDetailedMetrics(metrics.filter((metric: Metric) => metric.metricType === "detailed"));
    } catch (err) {
      setError("Failed to fetch metrics");
      console.error("Error fetching metrics:", err);
    } finally {
      setLoading(false);
    }
  };

  const getMetricById = (id: string): Metric | undefined => {
    return [...mainMetrics, ...detailedMetrics].find((metric) => metric.id === id);
  };

  const getMetricsByCategory = (category: Metric["category"]): Metric[] => {
    return [...mainMetrics, ...detailedMetrics].filter((metric) => metric.category === category);
  };

  const refreshMetrics = () => {
    fetchMetrics();
  };

  return {
    mainMetrics,
    detailedMetrics,
    loading,
    error,
    getMetricById,
    getMetricsByCategory,
    refreshMetrics,
  };
}