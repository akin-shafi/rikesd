"use client";

import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMetrics } from "@/hooks/useMetrics";
import MetricCard from "@/components/metric-card";
import MetricsSkeleton from "@/components/metrics-skeleton";

export default function MetricsSection() {
  const { mainMetrics, loading, error, refreshMetrics } = useMetrics();

  if (loading) {
    return <MetricsSkeleton />;
  }

  if (error) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600 mb-4">{error}</p>
            <Button
              onClick={refreshMetrics}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 display-text">
            Our Impact <span className="text-green-600">By Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time metrics showcasing our commitment to advancing research
            and sustainable development
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {mainMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} showTrend={true} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={refreshMetrics}
            variant="outline"
            className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>
    </section>
  );
}
