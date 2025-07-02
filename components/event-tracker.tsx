"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Star, X, Users } from "lucide-react";
import CountdownTimer from "./countdown-timer";

export default function EventTracker() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isMagnified, setIsMagnified] = useState(false);
  const [hasEventPassed, setHasEventPassed] = useState(false);

  // Set the event date to July 5, 2025, based on the flyer
  const eventDate = new Date("2025-07-05T09:30:00+01:00"); // 9:30 AM WAT
  const eventDateString = eventDate.toISOString();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkEventStatus = () => {
      const now = new Date().getTime();
      const eventTime = eventDate.getTime();
      setHasEventPassed(now > eventTime);
    };

    checkEventStatus();
    // Check every minute
    const interval = setInterval(checkEventStatus, 60000);

    return () => clearInterval(interval);
  }, [eventDate]);

  // Toggle magnification on click
  const toggleMagnify = () => {
    setIsMagnified((prev) => !prev);
  };

  if (!isVisible || hasEventPassed) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isSticky
          ? "bottom-6 right-6 w-auto max-w-sm shadow-lg"
          : "left-1/2 -translate-x-1/2 bottom-6 w-full max-w-5xl shadow-xl"
      }`}
    >
      <div className="overflow-hidden rounded-lg bg-gray-900 text-white">
        <div className="flex items-center justify-between p-3 border-b border-gray-700">
          <div className="flex items-center">
            <div className="bg-green-500 p-1 rounded mr-2 flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">FEATURED EVENT</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Close event notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSticky ? (
          <div className="flex flex-col md:flex-row">
            {/* Left side - Event Flyer */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
              <button
                onClick={toggleMagnify}
                className="relative w-full h-full cursor-zoom-in focus:outline-none"
              >
                <Image
                  src="/s2b-event-flyer.jpg"
                  alt="S2B#43 Event flyer"
                  fill
                  className={`object-cover transition-transform duration-300 ${
                    isMagnified ? "scale-110" : "scale-100"
                  }`}
                />
              </button>
            </div>

            {/* Right side - Event Details */}
            <div className="w-full md:w-3/5 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-full">
                  S2B#43
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                  #BetaDay
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-orange-500 text-white rounded-full">
                  #AfrikaRIDE2.0
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                The Science Technology & Innovation to Business
              </h3>
              <p className="text-lg font-semibold text-green-400 mb-4">
                RIKE Marketplace Hosts AroFarmer Project of BetaDay
              </p>

              <div className="mb-4 space-y-2">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>July 5, 2025</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>9:30 AM WAT</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Zoom Virtual Event</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Panel Discussion with Industry Experts</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-300 text-sm">
                  Join our monthly S2B session featuring stakeholder engagement
                  for the AroFarmer Project. Connect with industry leaders and
                  explore innovation opportunities.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <CountdownTimer
                  targetDate={eventDateString}
                  className="justify-start text-white"
                />

                <div className="flex gap-3">
                  <Link
                    href="#register-s2b"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center"
                  >
                    <span>Register Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                  <Link
                    href="#learn-more-s2b"
                    className="px-4 py-2 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <h3 className="text-sm font-bold text-white mr-4">
                S2B#43: AroFarmer Project BetaDay
              </h3>
            </div>
            <Link
              className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center"
              href="#register-s2b"
            >
              <span>Register</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
