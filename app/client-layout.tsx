"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { useEffect, useState } from "react"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  // Add loading state to show loader on initial page load
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}`)

      const reveals = document.querySelectorAll(".reveal-on-scroll")
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-[-1] industrial-grid pointer-events-none opacity-20" />
      {isLoading && <LoadingScreen />}
      <Navigation />
      {children}
      <Analytics />
    </>
  )
}

export default ClientLayout
