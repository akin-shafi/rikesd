"use client";

import { useState, useEffect } from "react";
import { getPartners } from "@/lib/queries";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "upcoming";
  startDate: string;
  endDate?: string;
  budget?: string;
  outcomes: string[];
  technologies: string[];
}

export interface Partner {
  id: string;
  name: string;
  type: "university" | "research_institute" | "government" | "private" | "ngo";
  logo: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  website?: string;
  established?: string;
  description: string;
  partnershipSince: string;
  projects: Project[];
  contactPerson?: {
    name: string;
    title: string;
    email: string;
    phone?: string;
  };
  achievements: string[];
  researchAreas: string[];
  stats?: {
    students?: number;
    faculty?: number;
    publications?: number;
    patents?: number;
  };
}

export function usePartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const data = await getPartners();
        // Map _id to id to match the Partner interface
        setPartners(data.map((partner: { _id: any }) => ({ ...partner, id: partner._id })));
      } catch (err) {
        setError("Failed to fetch partners");
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const getPartnerById = (id: string): Partner | undefined => {
    return partners.find((partner) => partner.id === id);
  };

  const getPartnersByType = (type: Partner["type"]): Partner[] => {
    return partners.filter((partner) => partner.type === type);
  };

  const getActiveProjects = (): Project[] => {
    return partners.flatMap((partner) => partner.projects.filter((project) => project.status === "active"));
  };

  const getCompletedProjects = (): Project[] => {
    return partners.flatMap((partner) => partner.projects.filter((project) => project.status === "completed"));
  };

  const getTotalStats = () => {
    return partners.reduce(
      (acc, partner) => {
        if (partner.stats) {
          acc.totalStudents += partner.stats.students || 0;
          acc.totalFaculty += partner.stats.faculty || 0;
          acc.totalPublications += partner.stats.publications || 0;
          acc.totalPatents += partner.stats.patents || 0;
        }
        return acc;
      },
      {
        totalStudents: 0,
        totalFaculty: 0,
        totalPublications: 0,
        totalPatents: 0,
      }
    );
  };

  return {
    partners,
    loading,
    error,
    getPartnerById,
    getPartnersByType,
    getActiveProjects,
    getCompletedProjects,
    getTotalStats,
  };
}