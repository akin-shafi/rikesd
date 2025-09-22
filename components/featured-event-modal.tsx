"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  X,
  Star,
  ChevronRight,
  Share2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useFeaturedEvent } from "@/hooks/useFeaturedEvent";
import SpeakerCard from "@/components/speaker-card";
import { urlFor } from "@/lib/sanityImageBuilder";

interface FeaturedEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeaturedEventModal({
  isOpen,
  onClose,
}: FeaturedEventModalProps) {
  const { featuredEvent, loading, error } = useFeaturedEvent();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: featuredEvent?.title || "RIKESD Featured Event",
      text: featuredEvent?.description || "Join our featured research event",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.log("Error copying to clipboard:", err);
      }
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !featuredEvent) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <div className="text-red-600 mb-4">
            {error || "Featured event not available"}
          </div>
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative">
          {featuredEvent.flyer && (
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-green-100 to-green-200">
              <Image
                src={urlFor(featuredEvent.flyer).url() || "/placeholder.svg"}
                alt={`${featuredEvent.title} flyer`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Featured Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">
                  <Star className="w-3 h-3 mr-1" />
                  Featured Event
                </Badge>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="absolute top-4 right-16 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Share2 className="w-5 h-5" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="max-h-[calc(90vh-20rem)] overflow-y-auto">
          <div className="p-8">
            {/* Event Info */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{featuredEvent.category}</Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  {featuredEvent.type}
                </Badge>
                {featuredEvent.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 display-text">
                {featuredEvent.title}
              </h1>

              {featuredEvent.subtitle && (
                <p className="text-xl text-green-600 font-medium mb-6">
                  {featuredEvent.subtitle}
                </p>
              )}

              {/* Event Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm">{formatDate(featuredEvent.date)}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p className="text-sm">{featuredEvent.time} WAT</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Platform</p>
                    <p className="text-sm">{featuredEvent.platform}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm">{featuredEvent.duration}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {featuredEvent.description}
              </p>
            </div>

            {/* Event Agenda */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 display-text">
                Event Agenda
              </h2>
              <div className="space-y-3">
                {featuredEvent.agenda.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-4 group-hover:bg-green-200 transition-colors">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 display-text">
                Featured Speakers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredEvent.speakers.slice(0, 6).map((speaker) => (
                  <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}
              </div>

              {featuredEvent.speakers.length > 6 && (
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    +{featuredEvent.speakers.length - 6} more speakers
                  </p>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Event Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {featuredEvent.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t bg-gray-50 px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-sm text-gray-600">
              <p>Don't miss this exclusive research event!</p>
              <p>Free registration • Limited seats available</p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={onClose}
                variant="outline"
                className="px-6 bg-transparent"
              >
                Close
              </Button>

              {featuredEvent.registrationUrl && (
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 px-8"
                >
                  <Link
                    href={featuredEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
