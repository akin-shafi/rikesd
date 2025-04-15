import Image from "next/image"
import Link from "next/link"

interface ProgramCircleProps {
  title: string
  description: string
  icon: string
}

export default function ProgramCircle({ title, description, icon }: ProgramCircleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center w-48 h-48 mb-6 bg-white rounded-full">
        <Image src={icon || "/placeholder.svg"} alt={title} width={80} height={80} className="object-contain" />
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
  )
}
