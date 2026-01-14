import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of production-grade backend systems: transaction processing, analytics platforms, and real-time risk scoring.",
};

const projects = [
  {
    title: "Real-Time Transaction Processing System",
    description:
      "High-throughput payment processing with strong consistency, idempotency, and sub-50ms p99 latency. Implements Outbox pattern for event consistency and immutable audit logging.",
    tech: ["Java", "Spring Boot", "Postgres", "Kafka", "Docker"],
    metrics: ["1K+ TPS", "Sub-50ms p99", "Idempotency", "Outbox Pattern"],
    slug: "transaction-processing",
  },
  {
    title: "Scalable Analytics & Reporting Backend",
    description:
      "Multi-tenant reporting system with aggressive caching, cursor pagination, and async job processing. Optimized for complex analytical queries with smart cache invalidation.",
    tech: ["Java", "Spring Boot", "Postgres", "Redis", "Docker"],
    metrics: ["Sub-500ms uncached", "Sub-20ms cached", "Cursor pagination"],
    slug: "analytics-backend",
  },
  {
    title: "Real-Time Trust & Risk Scoring Platform",
    description:
      "Real-time user behavior scoring with cache-first hot paths, Kafka ingestion, and comprehensive failure handling including rate limiting, circuit breakers, and bulkheads.",
    tech: ["Java", "Spring Boot", "Redis", "Postgres", "Docker"],
    metrics: [
      "Cache-first design",
      "Rate limiting",
      "Circuit breakers",
      "Bulkheads",
    ],
    slug: "trust-scoring",
  },
];

export default function Work() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-6 mb-16">
            <h1 className="text-5xl font-bold tracking-tight">Work</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              Production-grade backend systems built with explicit constraints,
              failure handling, and measurable results. Each project solves
              real problems at scale.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="block border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {project.title}
                  </h2>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="text-gray-900 dark:text-gray-100">
                      {metric}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
