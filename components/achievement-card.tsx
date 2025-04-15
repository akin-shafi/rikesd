import CounterAnimation from "./counter-animation"

interface AchievementCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export default function AchievementCard({ value, label, prefix = "", suffix = "" }: AchievementCardProps) {
  return (
    <div className="p-6 transition-all bg-white rounded-xl shadow-sm hover:shadow-md">
      <div className="text-3xl font-bold text-green-600">
        <CounterAnimation end={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
