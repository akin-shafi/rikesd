import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CounterAnimation from "@/components/counter-animation";
import type { Metric } from "@/hooks/useMetrics";

interface MetricCardProps {
  metric: Metric;
  showTrend?: boolean;
}

export default function MetricCard({
  metric,
  showTrend = false,
}: MetricCardProps) {
  const getTrendIcon = () => {
    if (!metric.trend) return null;

    switch (metric.trend.direction) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case "stable":
        return <Minus className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    if (!metric.trend) return "text-gray-500";

    switch (metric.trend.direction) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      case "stable":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card className="text-center bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
          <CounterAnimation
            end={metric.value}
            prefix={metric.prefix}
            suffix={metric.suffix}
          />
        </div>
        <p className="text-gray-600 font-medium mb-1">{metric.label}</p>

        {metric.description && (
          <p className="text-sm text-gray-500 mb-2">{metric.description}</p>
        )}

        {showTrend && metric.trend && (
          <div
            className={`flex items-center justify-center gap-1 text-sm ${getTrendColor()}`}
          >
            {getTrendIcon()}
            <span>
              {metric.trend.percentage}% {metric.trend.period}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
