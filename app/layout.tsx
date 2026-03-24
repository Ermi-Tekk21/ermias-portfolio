import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
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
          <footer className="container text-gray-400 font-mono max-w-2xl mx-auto mb-10 mx-auto pt-10 flex flex-col md:flex-row justify-between">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
              {/* Copyright */}
              <p className="text-sm sm:text-base text-sm tracking-wide">
                © {new Date().getFullYear()} Ermias Teklemarkos. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex space-x-6 mt-4 md:mt-0">
                {[
                  { href: "https://linkedin.com/in/ermias-tekilemarkos", label: "LinkedIn" }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:bg-clip-text text-sm sm:text-base hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 transition-all px-2 py-1 rounded"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}