"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="p-2">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="p-2 relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 ${
            theme === "light" ? "bg-gray-100 dark:bg-gray-700" : ""
          }`}
        >
          <div className="flex items-center">
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </div>
          {theme === "light" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 ${
            theme === "dark" ? "bg-gray-100 dark:bg-gray-700" : ""
          }`}
        >
          <div className="flex items-center">
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 ${
            theme === "system" ? "bg-gray-100 dark:bg-gray-700" : ""
          }`}
        >
          <div className="flex items-center">
            <Monitor className="mr-2 h-4 w-4" />
            <span>System</span>
          </div>
          {theme === "system" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
