import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
}

export default function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-start gap-6">
        <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <blockquote className="mb-4 italic text-gray-600">"{quote}"</blockquote>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-emerald-600">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
