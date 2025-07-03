"use client";

import { useState, useEffect } from "react";
import { getEvents } from "@/lib/queries";

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
  image: string;
  linkedIn?: string;
  twitter?: string;
  expertise: string[];
}

export interface EventDiscussion {
  topic: string;
  summary: string;
  keyPoints: string[];
  videoUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  duration: string;
  platform: string;
  type: "upcoming" | "past";
  featured: boolean;
  category: string;
  description: string;
  agenda: string[];
  speakers: Speaker[];
  registrationUrl?: string;
  tags: string[];
  flyer?: string;
  discussion?: EventDiscussion;
  attendees?: number;
  recording?: string;
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEvents();
        // Map _id to id to match the Event interface
        setEvents(data.map((event: { _id: any }) => ({ ...event, id: event._id })));
      } catch (err) {
        setError("Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getEventById = (id: string): Event | undefined => {
    return events.find((event) => event.id === id);
  };

  const getUpcomingEvents = (): Event[] => {
    return events
      .filter((event) => event.type === "upcoming")
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getPastEvents = (): Event[] => {
    return events
      .filter((event) => event.type === "past")
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const getFeaturedEvents = (): Event[] => {
    return events.filter((event) => event.featured);
  };

  const getEventsByCategory = (category: string): Event[] => {
    return events.filter((event) => event.category === category);
  };

  return {
    events,
    loading,
    error,
    getEventById,
    getUpcomingEvents,
    getPastEvents,
    getFeaturedEvents,
    getEventsByCategory,
  };
}