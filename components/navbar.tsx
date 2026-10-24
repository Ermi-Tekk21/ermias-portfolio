"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react"
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
      window.addEventListener("scroll", controlNavbar, { passive: true })
      return () => window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white/85 dark:bg-[#111215]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-3.5 sm:px-6 py-3 flex justify-between items-center max-w-5xl">
        {/* Brand */}
        <Link
          href="#"
          onClick={() => setIsMenuOpen(false)}
          className="text-sm xs:text-base sm:text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity truncate max-w-[200px] xs:max-w-none"
        >
          Ermias Teklemarkos
        </Link>

        {/* Desktop / Tablet Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-7">
          <ul className="flex items-center space-x-3.5 lg:space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
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
              className="text-xs h-8 px-2.5 lg:px-3 rounded-full font-medium"
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Hamburger */}
        <div className="flex md:hidden items-center gap-1.5">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 rounded-full text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-[53px] bg-white/95 dark:bg-[#111215]/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 overflow-y-auto max-h-[calc(100vh-53px)] ${
          isMenuOpen ? "opacity-100 visible py-5 px-5" : "opacity-0 invisible max-h-0 py-0 px-5 pointer-events-none"
        }`}
      >
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-2.5 px-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="pt-4 mt-3 border-t border-neutral-200/80 dark:border-neutral-800/80 space-y-3">
          <Button
            asChild
            variant="default"
            size="default"
            className="w-full text-sm font-medium rounded-full h-11"
          >
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
              Download Resume
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>
          </Button>

          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-neutral-500">
            <Link
              href="https://linkedin.com/in/ermias-tekilemarkos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/ermi-tekk21"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:ermiasteklemarkos@gmail.com"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <Link
              href="https://t.me/Tek_jeremy_x03"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Send className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
