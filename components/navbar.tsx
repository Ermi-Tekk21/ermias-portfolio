"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  const resumeUrl = "https://drive.google.com/file/d/1l28kgiCx8k1LetniY2NJM--kxrkKPd0b/view?usp=sharing"

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 120) {
          setIsVisible(false)
          setIsMenuOpen(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white/80 dark:bg-[#111215]/80 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center max-w-5xl">
        {/* Brand */}
        <Link
          href="#"
          className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
        >
          Ermias Teklemarkos
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 pl-2 border-l border-neutral-200 dark:border-neutral-800">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-xs h-8 px-3 rounded-full font-medium"
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 rounded-full text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden bg-white/95 dark:bg-[#111215]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-all duration-200 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <ul className="space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-1.5 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full text-xs font-medium rounded-full"
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                Resume
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
