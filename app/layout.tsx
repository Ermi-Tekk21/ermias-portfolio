import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Ermias Teklemarkos — Software Engineer",
  description: "Backend Focused Full-Stack Software Engineer building fintech and agritech microservices and RESTful APIs with Node.js and FastAPI.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ermias Teklemarkos — Software Engineer",
    description: "Backend Focused Full-Stack Software Engineer building fintech and agritech microservices and RESTful APIs with Node.js and FastAPI.",
    url: "https://ermias-teklemarkos-portfolio.vercel.app",
    siteName: "Ermias Teklemarkos Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ermias Teklemarkos Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ermias Teklemarkos — Software Engineer",
    description: "Backend Focused Full-Stack Software Engineer building fintech and agritech microservices and RESTful APIs with Node.js and FastAPI.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const resumeUrl = "https://drive.google.com/file/d/1l28kgiCx8k1LetniY2NJM--kxrkKPd0b/view?usp=sharing"

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
