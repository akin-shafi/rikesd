"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiCalendar, FiClock, FiMapPin, FiStar, FiX } from "react-icons/fi"
import CountdownTimer from "./countdown-timer"

export default function EventTracker() {
  const [isVisible, setIsVisible] = useState(true)
  const [isSticky, setIsSticky] = useState(false)

  // Example event date - set to 7 days in the future
  const eventDate = new Date()
  eventDate.setDate(eventDate.getDate() + 7)
  const eventDateString = eventDate.toISOString()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed z-60 transition-all duration-300 ${
        isSticky
          ? "bottom-6 right-6 w-auto max-w-sm shadow-lg"
          : "left-1/2 -translate-x-1/2 bottom-6 w-full max-w-4xl shadow-xl"
      }`}
    >
      <div className="overflow-hidden bg-white rounded-lg">
        <div className="flex items-center justify-between p-3 bg-green-500 text-white">
          <div className="flex items-center">
            <FiStar className="w-5 h-5 mr-2" />
            <span className="font-medium">FEATURED EVENT</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-green-600 transition-colors"
            aria-label="Close event notification"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {!isSticky ? (
          <div className="flex flex-col md:flex-row">
            {/* Left side - Event Flyer */}
            <div className="relative w-full md:w-2/5 h-48 md:h-auto">
              <Image src="/placeholder.svg?height=600&width=400" alt="Event flyer" fill className="object-cover" />
            </div>

            {/* Right side - Event Details */}
            <div className="w-full md:w-3/5 p-4">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scaling Research Through Partnerships in Nigeria</h3>

              <div className="mb-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <FiCalendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>April 17, 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiClock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>05:00pm WAT</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 text-sm">
                  Join us for an insightful session on how research partnerships can drive innovation and sustainable
                  development in Nigeria.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <CountdownTimer targetDate={eventDateString} className="justify-start" />

                <Link
                  href="#rsvp"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center w-fit"
                >
                  <span>RSVP Now</span>
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
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2 text-gray-900">Scaling Research Through Partnerships in Nigeria</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600">
                <FiCalendar className="w-4 h-4 mr-1" />
                <span className="text-sm">April 17, 2025</span>
              </div>
              <Link
                href="#rsvp"
                className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center"
              >
                <span>RSVP</span>
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
          </div>
        )}
      </div>
    </div>
  )
}
