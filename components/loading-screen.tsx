"use client"

import { useEffect, useState } from "react"
import { Shield, Radio, Thermometer, AlertTriangle } from "lucide-react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-background to-background">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-accent-foreground/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-accent-foreground bg-background/50 backdrop-blur-sm animate-pulse-slow">
            <Shield className="h-16 w-16 text-accent-foreground" />
          </div>

          {/* Orbiting sensor icons */}
          <div className="absolute inset-0 animate-spin-slow">
            <Radio className="absolute -top-2 left-1/2 h-6 w-6 -translate-x-1/2 text-accent-foreground" />
          </div>
          <div className="absolute inset-0 animate-spin-slow" style={{ animationDelay: "0.5s" }}>
            <Thermometer className="absolute top-1/2 -right-2 h-6 w-6 -translate-y-1/2 text-accent-foreground" />
          </div>
          <div className="absolute inset-0 animate-spin-slow" style={{ animationDelay: "1s" }}>
            <AlertTriangle className="absolute -bottom-2 left-1/2 h-6 w-6 -translate-x-1/2 text-accent-foreground" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground animate-fade-in">Smart IoT Safety Helmet</h2>
          <p className="mt-2 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Initializing safety systems...
          </p>
        </div>

        <div className="w-64">
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gradient-to-r from-accent-foreground to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
