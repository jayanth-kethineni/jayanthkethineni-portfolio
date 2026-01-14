import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Github, Mail } from "lucide-react";

const proofMetrics = [
  { label: "1K+ TPS", description: "Transaction throughput" },
  { label: "<50ms p99", description: "Latency target" },
  { label: "10M+ records", description: "Pipeline scale" },
  { label: "Kafka Outbox", description: "Event consistency" },
  { label: "Audit-ready", description: "Immutable logs" },
];

const projects = [
  {
    title: "Real-Time Transaction Processing System",
    problem:
      "Building a payment processing system that handles high-throughput transactions with strong consistency guarantees and sub-50ms latency requirements.",
    tech: ["Java", "Spring Boot", "Postgres", "Kafka", "Docker"],
    results: [
      "1K+ TPS sustained throughput",
      "Sub-50ms p99 latency",
      "Idempotency via unique keys",
      "Outbox pattern for event consistency",
      "Immutable audit ledger",
    ],
    slug: "transaction-processing",
  },
  {
    title: "Scalable Analytics & Reporting Backend",
    problem:
      "Designing a reporting system that serves complex analytical queries with aggressive caching strategies while maintaining data freshness.",
    tech: ["Java", "Spring Boot", "Postgres", "Redis", "Docker"],
    results: [
      "Sub-500ms uncached queries",
      "Sub-20ms cached responses",
      "Cursor-based pagination",
      "Async background jobs",
      "Smart cache TTL/eviction",
    ],
    slug: "analytics-backend",
  },
  {
    title: "Real-Time Trust & Risk Scoring Platform",
    problem:
      "Building a real-time risk evaluation system that scores user behavior with cache-first hot paths and comprehensive failure handling.",
    tech: ["Java", "Spring Boot", "Redis", "Postgres", "Docker"],
    results: [
      "Cache-first hot path design",
      "Kafka event ingestion",
      "Append-only audit logs",
      "Rate limiting + circuit breakers",
      "Bulkhead isolation",
    ],
    slug: "trust-scoring",
  },
];

const systemsDesignConcepts = [
  {
    title: "Idempotency Keys",
    why: "Prevent duplicate charges when clients retry failed requests",
    prevents: "Double-spending, duplicate orders, inconsistent state",
    tradeoff: "Requires key storage and cleanup; adds latency overhead",
  },
  {
    title: "Outbox Pattern",
    why: "Guarantee event publishing matches database commits",
    prevents: "Lost events, inconsistent downstream state, data drift",
    tradeoff: "Adds table writes; requires background polling or CDC",
  },
  {
    title: "Cache-First Hot Path",
    why: "Hit aggressive latency targets for high-frequency reads",
    prevents: "Database overload, slow response times, poor UX",
    tradeoff: "Stale data risk; cache invalidation complexity",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              I build low-latency,
              <br />
              failure-resilient backends.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Backend Software Engineer specializing in distributed systems.
              Focused on production-grade architecture, strong consistency, and
              sub-50ms latency targets.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                View projects
              </Link>
            </div>
          </div>
        </section>

        {/* Proof Bar */}
        <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {proofMetrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl font-bold">{metric.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.problem}
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
                <div className="space-y-2 mb-6">
                  <div className="font-semibold">Results:</div>
                  <ul className="space-y-1">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    Read case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <Github className="w-4 h-4" />
                    View code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Systems Design Snapshot */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">
              Systems Design Snapshot
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {systemsDesignConcepts.map((concept) => (
                <div
                  key={concept.title}
                  className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4">{concept.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        Why it exists
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {concept.why}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        Failure it prevents
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {concept.prevents}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        Tradeoff
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {concept.tradeoff}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Let&apos;s build something.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Looking for a backend engineer who thinks about failure modes,
              latency budgets, and production tradeoffs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact me
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
