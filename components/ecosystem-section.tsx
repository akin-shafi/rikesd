"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function EcosystemSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clean up any existing circles first
    const existingCircles = container.querySelectorAll(".dashed-circle")
    existingCircles.forEach((circle) => circle.remove())

    // Create dashed circles
    const circles = [
      { size: "70%", delay: 0 },
      { size: "85%", delay: 2 },
      { size: "100%", delay: 4 },
    ]

    circles.forEach(({ size, delay }) => {
      const circle = document.createElement("div")
      circle.className = "dashed-circle"
      circle.style.width = size
      circle.style.height = size
      circle.style.top = `calc(50% - ${size} / 2)`
      circle.style.left = `calc(50% - ${size} / 2)`
      circle.style.animationDelay = `${delay}s`
      container.appendChild(circle)
    })

    return () => {
      // Clean up
      if (container) {
        const circles = container.querySelectorAll(".dashed-circle")
        circles.forEach((circle) => circle.remove())
      }
    }
  }, [])

  return (
    <section id="ecosystem" className="py-20 text-white bg-[#121f2e] relative overflow-hidden">
      <div ref={containerRef} className="container px-4 mx-auto relative">
        {/* Dashed circles will be added here by useEffect */}

        <div className="max-w-3xl mx-auto mb-16 text-center relative z-10">
          <h2 className="mb-6 ecosystem-heading">
            The <span>Global RIKESD Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-300">
            Our mission is to empower talented and motivated people to build solutions that matter, no matter their
            location, gender, or race. This mission requires a strong global community of researchers, ecosystem
            leaders, advisors, and investors... and we have built just that.
          </p>

          {/* Mobile dashed line */}
          <div className="w-24 h-1 transform rotate-90 mx-auto lg:hidden mt-12 dashed-line"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 relative z-10">
          <CircleCard
            title="Building Research"
            description="Supporting innovative research projects that address real-world challenges."
            icon="/placeholder.svg?height=100&width=100"
          />
          <CircleCard
            title="Building Ecosystems"
            description="Accelerator to empower leaders to build strong research ecosystems."
            icon="/placeholder.svg?height=100&width=100"
          />
          <CircleCard
            title="Building Enterprise"
            description="Turning research into impactful enterprises and sustainable solutions."
            icon="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </section>
  )
}

interface CircleCardProps {
  title: string
  description: string
  icon: string
}

function CircleCard({ title, description, icon }: CircleCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center w-64 h-64 mb-6 bg-white rounded-full shadow-lg">
        <div className="flex flex-col items-center p-6">
          <Image src={icon || "/placeholder.svg"} alt={title} width={80} height={80} className="object-contain mb-4" />
          <h3 className="mb-3 text-2xl font-bold text-green-500">{title}</h3>
          <p className="mb-4 text-gray-600 text-sm">{description}</p>
          <Link
            href="#learn-more"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-500 border border-green-500 rounded-md hover:bg-green-50"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}
