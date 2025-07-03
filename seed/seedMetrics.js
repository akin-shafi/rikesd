import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid';

const client = createClient({
  projectId: "lwbnn2sj",
  dataset: "production",
  apiVersion: "2025-07-02",
  token: "sk3fpH2Bx5jTVthVosXaAqy4D3yDGO1W6QMQYXHiQZjjOjERv7JYI6QSLT7i9iAmjTkuPUtFuD3Xpxb5BJF0Xb9dLXHH4J8up8U93kGMoP9mcOaEwTVwKpr8fwP5YxTLPLyB0beqU7wl5H5ssL5XEeDE1fCuYi0UO5C6GJ5d6bkito7K6wTs",
  useCdn: false,
});

const mockMainMetrics = [
  {
    id: "research-projects",
    label: "Research Projects",
    value: 150,
    suffix: "+",
    description: "Active research projects across various domains",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 12,
      period: "last quarter",
    },
    metricType: "main",
  },
  {
    id: "partner-organizations",
    label: "Partner Organizations",
    value: 50,
    suffix: "+",
    description: "Strategic partnerships with institutions worldwide",
    category: "partnerships",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 8,
      period: "last quarter",
    },
    metricType: "main",
  },
  {
    id: "countries-reached",
    label: "Countries Reached",
    value: 25,
    suffix: "+",
    description: "Global reach across multiple continents",
    category: "global",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 15,
      period: "last year",
    },
    metricType: "main",
  },
  {
    id: "lives-impacted",
    label: "Lives Impacted",
    value: 10000,
    suffix: "+",
    description: "Direct and indirect beneficiaries of our research",
    category: "impact",
    lastUpdated: "2025-01-02T12:00:00Z",
    trend: {
      direction: "up",
      percentage: 25,
      period: "last year",
    },
    metricType: "main",
  },
];

const mockDetailedMetrics = [
  {
    id: "publications",
    label: "Publications",
    value: 100,
    suffix: "+",
    description: "Peer-reviewed publications and research papers",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
    metricType: "detailed",
  },
  {
    id: "research-funding",
    label: "Research Funding",
    value: 15,
    prefix: "$",
    suffix: "M+",
    description: "Total research funding secured",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
    metricType: "detailed",
  },
  {
    id: "mentors-advisors",
    label: "Mentors & Advisors",
    value: 1200,
    suffix: "+",
    description: "Expert network supporting our researchers",
    category: "partnerships",
    lastUpdated: "2025-01-02T12:00:00Z",
    metricType: "detailed",
  },
  {
    id: "impact-value",
    label: "Estimated Impact Value",
    value: 50,
    prefix: "$",
    suffix: "M",
    description: "Economic value of research impact",
    category: "impact",
    lastUpdated: "2025-01-02T12:00:00Z",
    metricType: "detailed",
  },
  {
    id: "events-hosted",
    label: "Events Hosted",
    value: 200,
    suffix: "+",
    description: "Research events and networking sessions",
    category: "global",
    lastUpdated: "2025-01-02T12:00:00Z",
    metricType: "detailed",
  },
  {
    id: "researchers-trained",
    label: "Researchers Trained",
    value: 500,
    suffix: "+",
    description: "Researchers who completed our programs",
    category: "research",
    lastUpdated: "2025-01-02T12:00:00Z",
    metricType: "detailed",
  },
];

async function seedData() {
  const allMetrics = [...mockMainMetrics, ...mockDetailedMetrics];

  for (const metric of allMetrics) {
    try {
      const doc = {
        _type: 'metric',
        _id: metric.id || uuidv4(),
        label: metric.label,
        value: metric.value,
        prefix: metric.prefix,
        suffix: metric.suffix,
        description: metric.description,
        category: metric.category,
        lastUpdated: metric.lastUpdated,
        trend: metric.trend,
        metricType: metric.metricType,
      };

      const res = await client.createIfNotExists(doc);
      console.log(`✅ Created: ${res.label}`);
    } catch (error) {
      console.error(`❌ Error for ${metric.label}:`, error);
    }
  }

  console.log('🚀 Seeding complete');
}

seedData();