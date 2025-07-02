import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 transition-all bg-white rounded-xl hover:shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-emerald-100 rounded-lg">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
