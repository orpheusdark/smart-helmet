"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react"

export function LiveDemo() {
  const [gasLevel, setGasLevel] = useState(150)
  const [temperature, setTemperature] = useState(28)
  const [motion, setMotion] = useState<"normal" | "alert" | "fall">("normal")

  useEffect(() => {
    const interval = setInterval(() => {
      setGasLevel((prev) => Math.max(0, Math.min(1000, prev + (Math.random() - 0.5) * 50)))
      setTemperature((prev) => Math.max(15, Math.min(50, prev + (Math.random() - 0.5) * 2)))

      const rand = Math.random()
      if (rand > 0.95) setMotion("fall")
      else if (rand > 0.85) setMotion("alert")
      else setMotion("normal")
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getStatus = () => {
    if (gasLevel > 500 || temperature > 40 || motion === "fall") return "danger"
    if (gasLevel > 300 || temperature > 35 || motion === "alert") return "warning"
    return "safe"
  }

  const status = getStatus()

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Live Demo Simulation</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real-time sensor readings and alert status simulation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Gas Level</h3>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-card-foreground">{gasLevel.toFixed(0)}</span>
              <span className="mb-1 text-sm text-muted-foreground">PPM</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full transition-all ${
                  gasLevel > 500 ? "bg-destructive" : gasLevel > 300 ? "bg-accent-foreground" : "bg-chart-2"
                }`}
                style={{ width: `${Math.min(100, (gasLevel / 1000) * 100)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {gasLevel > 500 ? "Critical" : gasLevel > 300 ? "Warning" : "Normal"}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Temperature</h3>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-card-foreground">{temperature.toFixed(1)}</span>
              <span className="mb-1 text-sm text-muted-foreground">°C</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full transition-all ${
                  temperature > 40 ? "bg-destructive" : temperature > 35 ? "bg-accent-foreground" : "bg-chart-2"
                }`}
                style={{ width: `${Math.min(100, (temperature / 50) * 100)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {temperature > 40 ? "Critical" : temperature > 35 ? "Warning" : "Normal"}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Motion Status</h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-4xl font-bold text-card-foreground capitalize">{motion}</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {motion === "normal" ? (
                <CheckCircle className="h-5 w-5 text-chart-2" />
              ) : motion === "alert" ? (
                <AlertTriangle className="h-5 w-5 text-accent-foreground" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
              <span className="text-xs text-muted-foreground">
                {motion === "normal" ? "Stable movement" : motion === "alert" ? "Unusual activity" : "Fall detected!"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div
            className={`rounded-lg border-2 p-6 text-center ${
              status === "danger"
                ? "border-destructive bg-destructive/10"
                : status === "warning"
                  ? "border-accent-foreground bg-accent-foreground/10"
                  : "border-chart-2 bg-chart-2/10"
            }`}
          >
            <div className="flex items-center justify-center gap-3">
              {status === "danger" ? (
                <XCircle className="h-8 w-8 text-destructive" />
              ) : status === "warning" ? (
                <AlertTriangle className="h-8 w-8 text-accent-foreground" />
              ) : (
                <CheckCircle className="h-8 w-8 text-chart-2" />
              )}
              <span className="text-2xl font-bold">
                {status === "danger" ? "DANGER" : status === "warning" ? "WARNING" : "SAFE"}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {status === "danger"
                ? "Emergency alert sent to supervisors"
                : status === "warning"
                  ? "Monitoring elevated parameters"
                  : "All systems normal"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
