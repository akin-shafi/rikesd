"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock, FiMapPin, FiStar, FiX } from "react-icons/fi";
import CountdownTimer from "./countdown-timer";

export default function EventTracker() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isMagnified, setIsMagnified] = useState(false);

  // Set the event date to April 23, 2025, to match the displayed date
  const eventDate = new Date("2025-04-23T17:00:00+01:00"); // 5:00 PM WAT (Lagos time)
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

  // Toggle magnification on click
  const toggleMagnify = () => {
    setIsMagnified((prev) => !prev);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isSticky
          ? "bottom-6 right-6 w-auto max-w-sm shadow-lg"
          : "left-1/2 -translate-x-1/2 bottom-6 w-full max-w-4xl shadow-xl"
      }`}
    >
      <div className="overflow-hidden rounded-lg bg-gray-900 text-white">
        <div className="flex items-center justify-between p-3 border-b border-gray-700">
          <div className="flex items-center">
            <div className="bg-green-500 p-1 rounded mr-2 flex items-center justify-center">
              <FiStar className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">FEATURED EVENT</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Close event notification"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {!isSticky ? (
          <div className="flex flex-col md:flex-row">
            {/* Left side - Event Flyer */}
            <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
              <button
                onClick={toggleMagnify}
                className="relative w-full h-full cursor-zoom-in focus:outline-none"
              >
                <Image
                  src="/flyer3.png?height=600&width=400"
                  alt="Event flyer"
                  fill
                  className={`object-contain transition-transform duration-300 ${
                    isMagnified ? "scale-150" : "scale-100"
                  }`}
                />
              </button>
            </div>

            {/* Right side - Event Details */}
            <div className="w-full md:w-3/5 p-4">
              <h3 className="text-xl font-bold mb-3 text-white">
                Skillnovate 2.0: Become a Certified Development Sector and
                Social Enterprise Manager
              </h3>

              <div className="mb-4 space-y-2">
                <div className="flex items-center text-gray-300">
                  <FiCalendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>April 23, 2025</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiClock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>10:00am WAT</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-300 text-sm">
                  Join us for Skillnovate 2.0 to gain certification and master
                  the skills needed to lead in the development sector and social
                  enterprise management.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <CountdownTimer
                  targetDate={eventDateString}
                  className="justify-start text-white"
                />

                <Link
                  href="https://docs.google.com/forms/d/13QD-YU5yNKh2zaL55XCrDQ9MegAuKSqY6fiv23fhlVI/viewform"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center w-fit"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-bold text-white mr-4">
                Skillnovate 2.0: Become a Certified Development Sector and
                Social Enterprise Manager
              </h3>
            </div>
            <Link
              className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center"
              href="https://docs.google.com/forms/d/13QD-YU5yNKh2zaL55XCrDQ9MegAuKSqY6fiv23fhlVI/viewform"
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
