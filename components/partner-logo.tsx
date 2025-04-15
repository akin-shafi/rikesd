import Image from "next/image"

interface PartnerLogoProps {
  name: string
}

export default function PartnerLogo({ name }: PartnerLogoProps) {
  return (
    <div className="flex items-center justify-center p-6 bg-white rounded-full shadow-sm h-32 w-32 mx-auto">
      <Image
        src="/placeholder.svg?height=80&width=80"
        alt={`${name} logo`}
        width={80}
        height={80}
        className="object-contain"
      />
    </div>
  )
}
