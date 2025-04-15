"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string // ISO date string
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  )
}

interface TimeUnitProps {
  value: number
  label: string
}

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-10 h-10 text-lg font-bold bg-gray-800 rounded-md text-white">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="mt-1 text-xs font-medium text-gray-600">{label}</span>
    </div>
  )
}
