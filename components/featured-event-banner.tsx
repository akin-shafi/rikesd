"use client";

import { useState } from "react";
import { Calendar, Clock, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useFeaturedEvent } from "@/hooks/useFeaturedEvent";
import FeaturedEventModal from "@/components/featured-event-modal";

export default function FeaturedEventBanner() {
  const { featuredEvent, loading } = useFeaturedEvent();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-4 bg-green-500 rounded w-32"></div>
              <div className="h-4 bg-green-500 rounded w-48"></div>
            </div>
            <div className="h-8 bg-green-500 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!featuredEvent) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 min-w-0 flex-1">
              <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600 flex-shrink-0">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">
                  {featuredEvent.title}
                </p>
                <div className="flex items-center space-x-4 text-xs text-green-100 mt-1">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(featuredEvent.date)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {featuredEvent.time} WAT
                  </span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              size="sm"
              className="bg-white text-green-600 hover:bg-green-50 ml-4 flex-shrink-0"
            >
              Learn More
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      <FeaturedEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
