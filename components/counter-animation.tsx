"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CounterAnimationProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function CounterAnimation({
  end,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()
    const endTime = startTime + duration * 1000

    const updateCount = (currentTime: number) => {
      if (currentTime >= endTime) {
        setCount(end)
        return
      }

      const progress = (currentTime - startTime) / (duration * 1000)
      countRef.current = Math.floor(progress * end)
      setCount(countRef.current)

      rafRef.current = requestAnimationFrame(updateCount)
    }

    rafRef.current = requestAnimationFrame(updateCount)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [end, duration, inView])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
