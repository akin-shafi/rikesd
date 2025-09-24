"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Filter, Search } from "lucide-react";
import { useEvents } from "@/hooks/useEvents";
import EventDetailCard from "@/components/event-detail-card";
import SpeakerCard from "@/components/speaker-card";

export default function EventsPage() {
  const { events, loading, error, getUpcomingEvents, getPastEvents } =
    useEvents();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
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

  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const categories = [
    "all",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  const filteredEvents = currentEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-content border-b border-gray-200 ">
        <div className="container px-4 mx-auto max-w-6xl py-8">
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
              RIKESD <span className="text-green-500">Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of research and innovation
              events. Join live sessions, watch past recordings, and connect
              with industry experts and thought leaders.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === "upcoming"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === "past"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>
      </div>

      {/* Events Content */}
      <div className="container px-4 mx-auto max-w-6xl py-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No events found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredEvents.map((event) => (
              <div key={event.id} className="space-y-8">
                {/* Event Details */}
                <EventDetailCard event={event} />

                {/* Event Discussion (for past events) */}
                {event.type === "past" && event.discussion && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Event Discussion
                    </h3>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-600 mb-2">
                        {event.discussion.topic}
                      </h4>
                      <p className="text-gray-700 mb-4">
                        {event.discussion.summary}
                      </p>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">
                          Key Discussion Points:
                        </h5>
                        <ul className="space-y-2">
                          {event.discussion.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Speakers */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {event.type === "past"
                      ? "Featured Speakers & Discussions"
                      : "Featured Speakers"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {event.speakers.map((speaker) => (
                      <SpeakerCard
                        key={speaker.id}
                        speaker={speaker}
                        showVideo={event.type === "past"}
                        videoUrl={event.recording}
                        discussion={
                          event.type === "past"
                            ? `Shared insights on`
                            : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
