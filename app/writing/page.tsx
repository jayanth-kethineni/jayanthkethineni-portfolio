import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on system design, backend engineering, and building production-grade software.",
};

const posts = [
  {
    slug: "outbox-pattern",
    title: "Outbox Pattern: What It Prevents in Real Systems",
    description: "A deep dive into the outbox pattern and how it prevents data inconsistencies in distributed systems.",
    date: "2026-01-14",
  },
  {
    slug: "idempotency-keys",
    title: "Idempotency Keys: Stopping Double-Spends",
    description: "An explanation of how idempotency keys work and why they are critical for building reliable APIs.",
    date: "2026-01-13",
  },
  {
    slug: "cache-first-hot-paths",
    title: "Cache-First Hot Paths: Hitting p99 Latency Targets",
    description: "How to use a cache-first hot path to meet aggressive latency SLOs for high-frequency reads.",
    date: "2026-01-12",
  },
];

export default function Writing() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold tracking-tight mb-8">Writing</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="block group"
              >
                <h2 className="text-2xl font-bold group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{post.description}</p>
                <p className="text-sm text-gray-500 mt-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
