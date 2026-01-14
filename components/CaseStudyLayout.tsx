import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function CaseStudyLayout({ children, metadata }: { children: React.ReactNode, metadata: { title: string; description: string } }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/work" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          <h1 className="text-5xl font-bold tracking-tight mb-4">{metadata.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{metadata.description}</p>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>
        </article>
      </main>
    </>
  );
}
