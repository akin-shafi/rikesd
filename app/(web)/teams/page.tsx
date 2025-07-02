"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Award,
  Target,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { useTeamMembers } from "@/hooks/useTeamMembers";
import TeamMemberCard from "@/components/team-member-card"; 

const teamCategories = [
  {
    id: "governors",
    name: "Board of Governors",
    description: "Strategic leadership and governance oversight",
    icon: Award,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "advisors",
    name: "Board of Advisors",
    description: "Expert guidance and strategic counsel",
    icon: Target,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "finance",
    name: "Board of Finance",
    description: "Financial oversight and investment strategy",
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
  },
  {
    id: "experts",
    name: "Board of Experts",
    description: "Technical expertise and research guidance",
    icon: Users,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "emt",
    name: "EMT Members",
    description: "Executive management and operations",
    icon: Briefcase,
    color: "from-red-500 to-red-600",
  },
] as const;

export default function TeamsPage() {
  const { teamMembers, loading, error, getTeamMembersByCategory } =
    useTeamMembers();
  const [activeTab, setActiveTab] = useState<
    "governors" | "advisors" | "finance" | "experts" | "emt"
  >("governors");

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentMembers = getTeamMembersByCategory(activeTab);
  const activeCategory = teamCategories.find((cat) => cat.id === activeTab);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-content border-b border-gray-200 ">
        <div className="container px-4 mx-auto max-w-7xl py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-500">Leadership Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts, leaders, and innovators driving
              RIKESD's mission to transform research into impactful solutions
              across Africa and beyond.
            </p>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {teamCategories.map((category) => {
              const memberCount = getTeamMembersByCategory(
                category.id as any
              ).length;
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {memberCount}
                  </div>
                  <div className="text-sm text-gray-600">
                    {category.name.replace("Board of ", "").replace("EMT ", "")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Categories Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex overflow-x-auto scrollbar-hide">
            {teamCategories.map((category) => {
              const IconComponent = category.icon;
              const memberCount = getTeamMembersByCategory(
                category.id as any
              ).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id as any)}
                  className={`flex items-center gap-3 px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === category.id
                      ? "border-green-500 text-green-600 bg-green-50"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs opacity-75">
                      {memberCount} members
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Members Content */}
      <div className="container px-4 mx-auto max-w-7xl py-12">
        {/* Active Category Header */}
        {activeCategory && (
          <div className="text-center mb-12">
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${activeCategory.color} flex items-center justify-center`}
            >
              <activeCategory.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {activeCategory.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {activeCategory.description}
            </p>
          </div>
        )}

        {/* Team Members Grid */}
        {currentMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No team members found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-16">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Interested in contributing to RIKESD's vision? We're always looking
            for passionate individuals to join our team and advisory boards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#careers"
              className="px-8 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
