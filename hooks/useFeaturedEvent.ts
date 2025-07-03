"use client";

import { useState, useEffect } from "react";
import { getFeaturedEvent } from "@/lib/queries";
import type { Event } from "@/hooks/useEvents";

export function useFeaturedEvent() {
  const [featuredEvent, setFeaturedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFeaturedEvent();
  }, []);

  const fetchFeaturedEvent = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getFeaturedEvent();
      // Map _id to id to match the Event interface
      setFeaturedEvent(data ? { ...data, id: data._id } : null);
    } catch (err) {
      setError("Failed to fetch featured event");
      console.error("Error fetching featured event:", err);
    } finally {
      setLoading(false);
    }
  };

  const refreshFeaturedEvent = () => {
    fetchFeaturedEvent();
  };

  return {
    featuredEvent,
    loading,
    error,
    refreshFeaturedEvent,
  };
}