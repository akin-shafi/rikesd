"use client";

import { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  Calendar,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    category: string;
    status: string;
    progress: number;
    team: string[];
    technologies: string[];
    startDate: string;
    endDate?: string;
    budget?: string;
    impact?: string;
    achievements?: string[];
    links?: {
      demo?: string;
      github?: string;
      documentation?: string;
    };
  };
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header with Image */}
        <div className="relative h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
          {!imageError ? (
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-green-800">
                  {project.title}
                </h3>
              </div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                project.status === "Active"
                  ? "bg-green-500/20 text-green-100 border border-green-400/30"
                  : project.status === "Completed"
                  ? "bg-blue-500/20 text-blue-100 border border-blue-400/30"
                  : "bg-yellow-500/20 text-yellow-100 border border-yellow-400/30"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-20rem)] lg:max-h-[calc(90vh-16rem)]">
          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {project.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Project Progress
                </span>
                <span className="text-sm font-bold text-green-600">
                  {project.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Team Members
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            {project.links && (
              <div className="flex flex-wrap gap-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                )}
                {project.links.documentation && (
                  <a
                    href={project.links.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentation
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 bg-gray-50 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Project Details
            </h3>

            <div className="space-y-6">
              {/* Timeline */}
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="font-medium text-gray-700">Timeline</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Started: {formatDate(project.startDate)}</p>
                  {project.endDate && (
                    <p>Completed: {formatDate(project.endDate)}</p>
                  )}
                </div>
              </div>

              {/* Team Size */}
              <div>
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="font-medium text-gray-700">Team Size</span>
                </div>
                <p className="text-sm text-gray-600">
                  {project.team.length} members
                </p>
              </div>

              {/* Budget */}
              {project.budget && (
                <div>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="font-medium text-gray-700">Budget</span>
                  </div>
                  <p className="text-sm text-gray-600">{project.budget}</p>
                </div>
              )}

              {/* Impact */}
              {project.impact && (
                <div>
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="font-medium text-gray-700">Impact</span>
                  </div>
                  <p className="text-sm text-gray-600">{project.impact}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
