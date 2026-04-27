"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full shadow-sm"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-600 dark:text-yellow-500" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all shadow-sm group"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-600 dark:text-yellow-500" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-600 dark:text-blue-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
