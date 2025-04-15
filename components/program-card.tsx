import Image from "next/image"
import Link from "next/link"

interface ProgramCardProps {
  title: string
  description: string
  icon: string
  showArrow?: boolean
}

export default function ProgramCard({ title, description, icon, showArrow = false }: ProgramCardProps) {
  return (
    <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
        <Image src={icon || "/placeholder.svg"} alt={title} width={40} height={40} />
      </div>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <Link href="#learn-more" className="inline-flex items-center text-green-600 hover:text-green-700">
        Learn More
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

      {showArrow && (
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      )}
    </div>
  )
}
