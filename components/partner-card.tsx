"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { Partner } from "@/hooks/usePartners";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeColor = (type: Partner["type"]) => {
    switch (type) {
      case "university":
        return "bg-blue-100 text-blue-800";
      case "research_institute":
        return "bg-purple-100 text-purple-800";
      case "government":
        return "bg-green-100 text-green-800";
      case "private":
        return "bg-orange-100 text-orange-800";
      case "ngo":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: Partner["type"]) => {
    switch (type) {
      case "university":
        return "University";
      case "research_institute":
        return "Research Institute";
      case "government":
        return "Government";
      case "private":
        return "Private Sector";
      case "ngo":
        return "NGO";
      default:
        return "Partner";
    }
  };

  const activeProjects = partner.projects.filter((p) => p.status === "active");
  const completedProjects = partner.projects.filter(
    (p) => p.status === "completed"
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            {partner.logo &&
            partner.logo !== "/placeholder.svg?height=120&width=120" ? (
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                fill
                className="object-contain rounded-lg"
              />
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {partner.name
                    .split(" ")
                    .map((word) => word.charAt(0))
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                {partner.name}
              </h3>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                  partner.type
                )}`}
              >
                {getTypeLabel(partner.type)}
              </span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {partner.location.city}, {partner.location.state},{" "}
              {partner.location.country}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              Partnership since {partner.partnershipSince}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4">{partner.description}</p>

        {/* Stats */}
        {partner.stats && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {partner.stats.students?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {partner.stats.publications}
              </div>
              <div className="text-sm text-gray-600">Publications</div>
            </div>
          </div>
        )}

        {/* Projects Summary */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Projects</h4>
            <div className="flex gap-2">
              {activeProjects.length > 0 && (
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {activeProjects.length} Active
                </span>
              )}
              {completedProjects.length > 0 && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                  {completedProjects.length} Completed
                </span>
              )}
            </div>
          </div>

          {partner.projects.slice(0, 2).map((project) => (
            <div key={project.id} className="mb-2 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <h5 className="font-medium text-gray-900">{project.name}</h5>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === "active"
                      ? "bg-green-100 text-green-800"
                      : project.status === "completed"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Research Areas</h4>
          <div className="flex flex-wrap gap-2">
            {partner.researchAreas.slice(0, 4).map((area, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {area}
              </span>
            ))}
            {partner.researchAreas.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                +{partner.researchAreas.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
        >
          {isExpanded ? "Show Less" : "Show More"}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-4 animate-in slide-in-from-top-2 duration-300">
            {/* All Projects */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">All Projects</h4>
              <div className="space-y-3">
                {partner.projects.map((project) => (
                  <div key={project.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-gray-900">
                        {project.name}
                      </h5>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.status === "active"
                            ? "bg-green-100 text-green-800"
                            : project.status === "completed"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {project.description}
                    </p>

                    {project.budget && (
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Budget:</strong> {project.budget}
                      </div>
                    )}

                    <div className="mb-3">
                      <h6 className="text-sm font-medium text-gray-900 mb-1">
                        Key Outcomes:
                      </h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {partner.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-gray-600"
                  >
                    <Award className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            {partner.contactPerson && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Contact Information
                </h4>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">
                    {partner.contactPerson.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {partner.contactPerson.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {partner.contactPerson.email}
                  </div>
                  {partner.contactPerson.phone && (
                    <div className="text-sm text-gray-600">
                      {partner.contactPerson.phone}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* External Links */}
            <div className="flex gap-3">
              {partner.website && (
                <Link
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
