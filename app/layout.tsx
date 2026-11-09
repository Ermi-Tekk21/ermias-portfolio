import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ermias.pro.et"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d10" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ermias Teklemarkos — Software Engineer | Backend & AI Automation",
    template: "%s | Ermias Teklemarkos",
  },
  description:
    "Backend-heavy Full-Stack Software Engineer specializing in scalable microservices, high-throughput APIs, distributed systems, and AI workflow automations with n8n, Node.js, FastAPI, Go, and LLMs.",
  keywords: [
    "Ermias Teklemarkos",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Engineer",
    "Microservices",
    "Distributed Systems",
    "AI Automation",
    "Workflow Automation",
    "n8n Workflows",
    "LLM Models",
    "Google Gemini",
    "Google 3rd-Party Integrations",
    "Node.js",
    "NestJS",
    "Express.js",
    "FastAPI",
    "Python",
    "Go",
    "PostgreSQL",
    "Kafka",
    "Redis",
    "Next.js",
    "React",
    "Addis Ababa",
    "Ethiopia",
  ],
  authors: [{ name: "Ermias Teklemarkos", url: siteUrl }],
  creator: "Ermias Teklemarkos",
  publisher: "Ermias Teklemarkos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ermias Teklemarkos — Software Engineer",
    title: "Ermias Teklemarkos — Software Engineer | Backend & AI Automation",
    description:
      "Backend-heavy Full-Stack Software Engineer specializing in scalable microservices, high-throughput APIs, distributed systems, and AI workflow automations with n8n, Node.js, FastAPI, Go, and LLMs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ermias Teklemarkos — Software Engineer Portfolio Thumbnail",
        type: "image/png",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ermias Teklemarkos — Software Engineer Portfolio Thumbnail",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ermias Teklemarkos — Software Engineer | Backend & AI Automation",
    description:
      "Backend-heavy Full-Stack Software Engineer specializing in scalable microservices, high-throughput APIs, distributed systems, and AI workflow automations with n8n, Node.js, FastAPI, Go, and LLMs.",
    creator: "@ermi_tekk21",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ermias Teklemarkos — Software Engineer Portfolio Thumbnail",
      },
    ],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const resumeUrl = "https://drive.google.com/file/d/1l28kgiCx8k1LetniY2NJM--kxrkKPd0b/view?usp=sharing"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ermias Teklemarkos",
        jobTitle: "Software Engineer",
        description:
          "Backend-heavy Full-Stack Software Engineer specializing in scalable microservices, high-throughput APIs, distributed systems, and AI workflow automations with n8n, Node.js, FastAPI, Go, and LLMs.",
        url: siteUrl,
        image: `${siteUrl}/profile.png`,
        sameAs: [
          "https://linkedin.com/in/ermias-tekilemarkos",
          "https://github.com/ermi-tekk21",
          "https://t.me/Tek_jeremy_x03",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Addis Ababa",
          addressCountry: "ET",
        },
        knowsAbout: [
          "Backend Engineering",
          "Microservices Architecture",
          "Fintech Systems",
          "AI Automation",
          "Workflow Automation (n8n)",
          "LLMs (Gemini, OpenAI, Claude)",
          "Node.js",
          "NestJS",
          "FastAPI",
          "Go",
          "PostgreSQL",
          "Kafka",
          "Redis",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Adama Science and Technology University (ASTU)",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Ermias Teklemarkos — Software Engineer",
        description:
          "Portfolio of Ermias Teklemarkos — Backend & Full-Stack Software Engineer specializing in scalable fintech microservices and AI workflow automations.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#f4f5f7] dark:bg-[#0c0d10] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-neutral-200 selection:text-neutral-900 dark:selection:bg-neutral-800 dark:selection:text-neutral-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
          <Navbar />
          <main className="flex-grow pt-14 sm:pt-16 pb-12 sm:pb-16">{children}</main>
          
          <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-[#111215]/60 text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24 sm:pb-28">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 text-center sm:text-left">
                <div>
                  <Link
                    href="#"
                    className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
                  >
                    Ermias Teklemarkos
                  </Link>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Software Engineer • Addis Ababa, Ethiopia
                  </p>
                </div>

                <ul className="flex flex-wrap justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
                  {[
                    { href: "#about", label: "About" },
                    { href: "#experience", label: "Experience" },
                    { href: "#projects", label: "Projects" },
                    { href: "#skills", label: "Skills" },
                    { href: "#education", label: "Education" },
                    { href: "#contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-neutral-200/80 dark:border-neutral-800/80 my-6" />

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-center sm:text-left">
                <p>© {new Date().getFullYear()} Ermias Teklemarkos. Built with clean, simple design.</p>

                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5">
                  <Link
                    href="https://linkedin.com/in/ermias-tekilemarkos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
                  >
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="https://github.com/ermi-tekk21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
                  >
                    GitHub
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="https://t.me/Tek_jeremy_x03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
                  >
                    Telegram
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
                  >
                    Resume
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
