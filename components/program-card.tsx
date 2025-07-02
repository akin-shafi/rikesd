import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  showArrow?: boolean;
}

function getPathwayIcon(iconType: string) {
  switch (iconType) {
    case "core-program":
      return (
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
          className="text-green-500"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          <path d="M6 8h2" />
          <path d="M6 12h2" />
          <path d="M16 8h2" />
          <path d="M16 12h2" />
        </svg>
      );
    case "innovation-lab":
      return (
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
          className="text-green-500"
        >
          <path d="M9 2v6" />
          <path d="M15 2v6" />
          <path d="M12 17v5" />
          <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
          <path d="M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" />
          <path d="M12 12h.01" />
        </svg>
      );
    case "enterprise-network":
      return (
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
          className="text-green-500"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    default:
      return (
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
          className="text-green-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
  }
}

export default function ProgramCard({
  title,
  description,
  icon,
  showArrow = false,
}: ProgramCardProps) {
  return (
    <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
        {getPathwayIcon(icon)}
      </div>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <Link
        href="#learn-more"
        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
      >
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
          className="ml-2 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>

      {showArrow && (
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
