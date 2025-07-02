"use client";

import { useState } from "react";
import { Play, Linkedin, Twitter } from "lucide-react";
import type { Speaker } from "@/hooks/useEvents";

interface SpeakerCardProps {
  speaker: Speaker;
  showVideo?: boolean;
  videoUrl?: string;
  discussion?: string;
}

export default function SpeakerCard({
  speaker,
  showVideo = false,
  videoUrl,
  discussion,
}: SpeakerCardProps) {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      {/* Speaker Image/Avatar */}
      <div className="flex items-center mb-4">
        {speaker.image && !imageError ? (
          <img
            src={speaker.image || "/placeholder.svg"}
            alt={speaker.name || "Speaker"}
            className="w-16 h-16 rounded-full object-cover mr-4"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4">
            <span className="text-xl font-bold text-white">
              {getInitials(speaker.name || "")}
            </span>
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {speaker.name || "Unknown Speaker"}
          </h3>
          <p className="text-sm text-green-600 font-medium">
            {speaker.title || "Speaker"}
          </p>
          <p className="text-sm text-gray-600">{speaker.organization || ""}</p>
        </div>
      </div>

      {/* Bio */}
      {speaker.bio && (
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {speaker.bio}
        </p>
      )}

      {/* Expertise Tags */}
      {speaker.expertise && speaker.expertise.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {speaker.expertise.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Discussion (for past events) */}
      {discussion && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 font-medium mb-1">
            Discussion Contribution
          </p>
          <p className="text-sm text-blue-700">{discussion}</p>
        </div>
      )}

      {/* Video Link (for past events) */}
      {showVideo && videoUrl && (
        <div className="mb-4">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Session
          </a>
        </div>
      )}

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {speaker.linkedIn && (
          <a
            href={speaker.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {speaker.twitter && (
          <a
            href={speaker.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
            title="Twitter Profile"
          >
            <Twitter className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
