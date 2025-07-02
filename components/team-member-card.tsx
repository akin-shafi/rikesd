"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

interface TeamMember {
<<<<<<< HEAD
  id: string; 
=======
  id: string;
>>>>>>> fadaf78 (initial commit to new branch)
  name: string;
  designation: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if the image field contains initials (2 uppercase letters)
  const isInitials = /^[A-Z]{2}$/.test(member.image);

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Card Header */}
      <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {isInitials ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/90 rounded-full flex items-center justify-center text-4xl font-bold text-green-600">
              {member.image}
            </div>
          </div>
        ) : (
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
            <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
            <p className="text-green-600 font-medium text-sm">
              {member.designation}
            </p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

        {/* Expertise Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {member.expertise.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
              >
                {skill}
              </span>
            ))}
            {member.expertise.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                +{member.expertise.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            {isExpanded ? "Less" : "More"}
            <ExternalLink className="w-3 h-3 ml-1" />
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Full Bio</h4>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  All Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
