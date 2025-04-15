import Link from "next/link"

interface EventCardProps {
  title: string
  date: string
  time: string
  featured?: boolean
}

export default function EventCard({ title, date, time, featured = false }: EventCardProps) {
  return (
    <div
      className={`p-4 border rounded-lg transition-all ${featured ? "border-green-200 bg-green-50" : "border-gray-200 bg-white"}`}
    >
      <div className="flex flex-col">
        {featured && (
          <div className="inline-flex items-center mb-2 text-xs font-medium text-green-800 bg-green-100 rounded-full px-2.5 py-0.5 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Featured
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-1">
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
            className="mr-2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          {date}
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
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
            className="mr-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {time}
        </div>
        <Link
          href="#event-details"
          className={`text-sm font-medium ${featured ? "text-green-500 hover:text-green-600" : "text-gray-600 hover:text-gray-900"}`}
        >
          View details →
        </Link>
      </div>
    </div>
  )
}
