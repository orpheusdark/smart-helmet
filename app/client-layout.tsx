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

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Navigation />
      {children}
      <Analytics />
    </>
  )
}

export default ClientLayout
