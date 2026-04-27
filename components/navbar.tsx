"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
          setIsMenuOpen(false) // Close menu when scrolling down
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
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-[#080e1f]/90 backdrop-blur-xl border-b border-gray-200 dark:border-blue-900/30 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-center gap-10 items-center max-w-7xl">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-gray-800 dark:text-gray-200 font-bold text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#080e1f] border-b border-gray-200 dark:border-blue-900/30 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <ul className="p-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-800 dark:text-gray-200 font-bold text-lg hover:text-blue-600 dark:hover:text-blue-400 py-2 border-b border-gray-50 dark:border-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

