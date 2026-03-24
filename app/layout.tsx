import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Ermias Teklemarkos - Portfolio",
  description: "Software Engineer | Full-Stack Developer | Exploring Data Science",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ermias Teklemarkos - Portfolio",
    description: "Software Engineer | Full-Stack Developer | Exploring Data Science",
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
    title: "Ermias Teklemarkos - Portfolio",
    description: "Software Engineer | Full-Stack Developer | Exploring Data Science",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-20">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark" disableTransitionOnChange={false}>
          <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#080e1f]/80 backdrop-blur-md border-b border-blue-900/30">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              {/* Logo / Brand */}
              <Link
                href="/"
                className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-900 text-transparent bg-clip-text drop-shadow-lg"
              >
                Ermias Teklemarkos
              </Link>

              {/* Navigation Links */}
              <ul className="hidden md:flex space-x-6">
                {[
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#experience", label: "Experience" },
                  { href: "#education", label: "Education" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base 
                     hover:text-blue-400 hover:after:scale-x-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 
                     after:w-full after:h-0.5 after:bg-blue-400 after:origin-left after:scale-x-0 after:transition-transform duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="w-full bg-[#080e1f] border-t border-blue-900/30 text-gray-400 font-mono">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

              {/* Top row: brand + nav links */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 mb-8">

                {/* Brand */}
                <Link
                  href="/"
                  className="text-lg sm:text-xl font-extrabold tracking-wide bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-900 text-transparent bg-clip-text drop-shadow-lg"
                >
                  Ermias Teklemarkos
                </Link>

                {/* Nav links - wrap nicely on mobile */}
                <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
                  {[
                    { href: "#about", label: "About" },
                    { href: "#skills", label: "Skills" },
                    { href: "#projects", label: "Projects" },
                    { href: "#experience", label: "Experience" },
                    { href: "#education", label: "Education" },
                    { href: "#contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-blue-900/20 mb-6" />

              {/* Bottom row: copyright + social */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
                <p className="tracking-wide text-center sm:text-left">
                  © {new Date().getFullYear()} Ermias Teklemarkos. All rights reserved.
                </p>

                <div className="flex gap-4">
                  {[
                    { href: "https://linkedin.com/in/ermias-tekilemarkos", label: "LinkedIn" },
                    { href: "https://github.com/ermi-tekk21", label: "GitHub" },
                    { href: "mailto:ermiasteklemarkos@gmail.com", label: "Email" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}