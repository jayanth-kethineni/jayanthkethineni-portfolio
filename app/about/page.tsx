import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

import { Mail, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Backend Software Engineer based in Austin, Texas. Focused on building low-latency, failure-resilient distributed systems.",
};

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold tracking-tight mb-8">About</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m Jayanth Kethineni, a Backend Software Engineer based in
              Austin, Texas. I specialize in building low-latency, distributed
              systems that handle real-world scale and complexity.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What I do</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I build backend systems with explicit constraints and measurable
              results. My work focuses on production-grade architecture:
              idempotency patterns, event consistency, failure handling, and
              aggressive latency optimization. I think in terms of SLOs,
              tradeoffs, and failure modes rather than just features.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">CRED</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Software Engineering Intern
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Built Java + Spring Boot services handling 10M+ records.
                  Achieved ~40% performance improvement through SQL optimization
                  and strategic indexing. Worked on production pipelines with
                  real scale constraints.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Technical focus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Backend & Infrastructure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Java, Spring Boot, Postgres, Redis, Kafka, Docker
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">System Design Patterns</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Idempotency, Outbox pattern, Circuit breakers, Rate limiting,
                  Cache strategies
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sub-50ms p99 latency, 1K+ TPS throughput, Query optimization,
                  Indexing strategies
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Reliability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Strong consistency, Failure handling, Audit logging,
                  Observability
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Contact</h2>
            <div className="flex gap-4">
              <a
                href="mailto:jayanthkethineni@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email me
              </a>
              <a
                href="https://github.com/jayanth-kethineni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
