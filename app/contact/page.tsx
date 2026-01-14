import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";
import { Mail, Github, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jayanth Kethineni. Available for backend engineering opportunities in Austin, Texas and remote.",
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold tracking-tight mb-8">Contact</h1>

          <div className="space-y-8">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m currently looking for backend engineering opportunities where
              I can work on distributed systems, high-throughput architectures,
              and production-grade infrastructure.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h2 className="font-bold mb-1">Email</h2>
                  <a
                    href="mailto:jayanthkethineni@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    jayanthkethineni@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Github className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h2 className="font-bold mb-1">GitHub</h2>
                  <a
                    href="https://github.com/jayanth-kethineni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    github.com/jayanth-kethineni
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h2 className="font-bold mb-1">Location</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Austin, Texas, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">What I&apos;m looking for</h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Backend or platform engineering roles working on distributed
                    systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Teams that value production quality, explicit tradeoffs, and
                    failure handling
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Problems involving latency optimization, high throughput, or
                    strong consistency
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Opportunities to work with technologies like Java, Spring
                    Boot, Kafka, Postgres, Redis
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="mailto:jayanthkethineni@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
