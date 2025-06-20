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
  description: "Software Engineer | Full-Stack Developer | Junior ML Engineer",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ermias Teklemarkos - Portfolio",
    description: "Software Engineer | Full-Stack Developer | Junior ML Engineer",
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
    description: "Software Engineer | Full-Stack Developer | Junior ML Engineer",
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
              <Link
                href="/"
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Ermias Teklemarkos
              </Link>
              <ul className="hidden md:flex space-x-6">
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="hover:text-primary transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#education" className="hover:text-primary transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
              <ThemeToggle />
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="py-8 px-4 border-t bg-muted/30">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ermias Teklemarkos. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="https://github.com/ermi-tekk21" className="hover:text-primary transition-colors text-sm">
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/ermias-tekilemarkos"
                  className="hover:text-primary transition-colors text-sm"
                >
                  LinkedIn
                </Link>
                <Link
                  href="mailto:ermiasteklemarkos@gmail.com"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Email
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}