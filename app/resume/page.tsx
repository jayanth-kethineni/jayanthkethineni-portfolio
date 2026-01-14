import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Jayanth Kethineni - Backend Software Engineer",
};

export default function Resume() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-5xl font-bold tracking-tight">Resume</h1>
            <a
              href="/Jayanth_Kethineni_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Jayanth Kethineni</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Backend Software Engineer | Austin, Texas, USA
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                jayanthkethineni@gmail.com | github.com/jayanth-kethineni
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Backend Software Engineer specializing in low-latency,
                distributed systems. Experienced in building production-grade
                services with explicit failure handling, strong consistency
                guarantees, and measurable performance targets. Focused on
                idempotency patterns, event-driven architectures, and aggressive
                latency optimization.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        Software Engineering Intern
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">CRED</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      Built Java + Spring Boot services handling 10M+ records in
                      production pipelines
                    </li>
                    <li>
                      Achieved ~40% performance improvement through SQL query
                      optimization and strategic indexing
                    </li>
                    <li>
                      Worked on high-scale backend systems with real production
                      constraints
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                Projects
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Real-Time Transaction Processing System
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Java | Spring Boot | Postgres | Kafka | Docker
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>1K+ TPS sustained throughput with sub-50ms p99 latency</li>
                    <li>
                      Implemented idempotency via unique keys to prevent
                      duplicate transactions
                    </li>
                    <li>
                      Used Outbox pattern for guaranteed event consistency with
                      database commits
                    </li>
                    <li>Built immutable audit ledger for compliance tracking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Scalable Analytics & Reporting Backend
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Java | Spring Boot | Postgres | Redis | Docker
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>
                      Sub-500ms uncached queries, sub-20ms cached response times
                    </li>
                    <li>
                      Implemented cursor-based pagination for large result sets
                    </li>
                    <li>
                      Built async job processing for heavy analytical workloads
                    </li>
                    <li>Designed smart cache TTL and eviction strategies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Real-Time Trust & Risk Scoring Platform
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Java | Spring Boot | Redis | Postgres | Docker
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>
                      Cache-first hot path design for real-time scoring with
                      minimal latency
                    </li>
                    <li>Kafka-based event ingestion for behavior tracking</li>
                    <li>Append-only audit logs for compliance and debugging</li>
                    <li>
                      Comprehensive failure handling: rate limiting, circuit
                      breakers, bulkheads
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Languages & Frameworks</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Java, Spring Boot, SQL
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Databases & Caching</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Postgres, Redis
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Infrastructure</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Docker, Kafka
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">System Design</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Idempotency, Outbox pattern, Circuit breakers, Rate
                    limiting, Cache strategies
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
