import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jayanthkethineni.com"),
  title: {
    default: "Jayanth Kethineni - Backend Software Engineer",
    template: "%s | Jayanth Kethineni",
  },
  description:
    "Backend Software Engineer specializing in low-latency, distributed systems. Building failure-resilient backends with 1K+ TPS, sub-50ms p99 latency, and production-grade architecture.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Low Latency",
    "Java",
    "Spring Boot",
    "Kafka",
    "Postgres",
    "Redis",
    "System Design",
  ],
  authors: [{ name: "Jayanth Kethineni" }],
  creator: "Jayanth Kethineni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jayanthkethineni.com",
    title: "Jayanth Kethineni - Backend Software Engineer",
    description:
      "Backend Software Engineer specializing in low-latency, distributed systems. Building failure-resilient backends with 1K+ TPS, sub-50ms p99 latency.",
    siteName: "Jayanth Kethineni",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jayanth Kethineni - Backend Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayanth Kethineni - Backend Software Engineer",
    description:
      "Backend Software Engineer specializing in low-latency, distributed systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jayanth Kethineni",
              url: "https://jayanthkethineni.com",
              jobTitle: "Backend Software Engineer",
              description:
                "Backend Software Engineer specializing in low-latency, distributed systems",
              email: "jayanthkethineni@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Austin",
                addressRegion: "TX",
                addressCountry: "USA",
              },
              sameAs: ["https://github.com/jayanth-kethineni"],
            }),
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100")}>
        {children}
      </body>
    </html>
  );
}
