import Link from "next/link";

interface ProgramCircleProps {
  title: string;
  description: string;
  icon: string;
}

function getIcon(iconType: string) {
  switch (iconType) {
    case "research":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z" />
          <path d="M13 5h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "ecosystem":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
          <path d="M12 2a14.5 14.5 0 0 1 0 20" />
        </svg>
      );
    case "enterprise":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <path d="M9 9v.01" />
          <path d="M9 12v.01" />
          <path d="M9 15v.01" />
          <path d="M9 18v.01" />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
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

export default function ProgramCircle({
  title,
  description,
  icon,
}: ProgramCircleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center w-48 h-48 mb-6 bg-white rounded-full shadow-lg">
        {getIcon(icon)}
      </div>
      <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <Link
        href="#learn-more"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-white rounded-md hover:bg-white/10"
      >
        Learn more
      </Link>
    </div>
  );
}
