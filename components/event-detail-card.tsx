import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  Play,
} from "lucide-react";
import type { Event } from "@/hooks/useEvents";

interface EventDetailCardProps {
  event: Event;
}

export default function EventDetailCard({ event }: EventDetailCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {event.flyer && (
        <div className="relative h-64 md:h-80 lg:h-96 bg-gray-100">
          <Image
            src={event.flyer || "/placeholder.svg"}
            alt={`${event.title} flyer`}
            fill
            className="object-cover md:object-contain lg:object-contain"
          />
          {event.type === "past" && event.recording && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group cursor-pointer">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-green-600 transition-colors">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <p className="font-medium">Watch Recording</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            {event.category}
          </span>
          {event.featured && (
            <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
              Featured
            </span>
          )}
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              event.type === "upcoming"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {event.type === "upcoming" ? "Upcoming" : "Past Event"}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2 display-text">
          {event.title}
        </h2>
        {event.subtitle && (
          <p className="text-lg text-green-600 font-medium mb-4">
            {event.subtitle}
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="text-sm">
              {event.time} WAT ({event.duration})
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="text-sm">{event.platform}</span>
          </div>
          {event.attendees && (
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{event.attendees} attendees</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-6">{event.description}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Event Agenda
          </h3>
          <ul className="space-y-2">
            {event.agenda.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {event.type === "upcoming" && event.registrationUrl && (
          <Link
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Register for Event
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        )}

        {event.type === "past" && event.recording && (
          <Link
            href={event.recording}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Watch Recording
            <Play className="w-4 h-4 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}
