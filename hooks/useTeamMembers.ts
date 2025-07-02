// teamMembers.tsx
"use client";

import { useState, useEffect } from "react";
import { getTeamMembers } from "@/lib/queries";

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  linkedin?: string;
  twitter?: string;
  website?: string;
  category: "governors" | "advisors" | "finance" | "experts" | "emt";
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function useTeamMembers() {
  // Fix: Change the state type to TeamMember[] instead of TeamMemberCardProps[]
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const data = await getTeamMembers();
        // Assuming getTeamMembers returns data matching TeamMember interface
        setTeamMembers(data.map((member: { _id: any; }) => ({ ...member, id: member._id })));
      } catch (err) {
        setError("Failed to fetch team members");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const getTeamMembersByCategory = (
    category: TeamMember["category"]
  ): TeamMember[] => {
    return teamMembers.filter((member) => member.category === category);
  };

  const getTeamMemberById = (id: string): TeamMember | undefined => {
    return teamMembers.find((member) => member.id === id);
  };

  return {
    teamMembers,
    loading,
    error,
    getTeamMembersByCategory,
    getTeamMemberById,
  };
}