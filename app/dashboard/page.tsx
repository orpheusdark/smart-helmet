"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, CheckCircle, XCircle, MapPin, User, Clock } from "lucide-react"

interface Worker {
  id: string
  name: string
  location: string
  gasLevel: number
  temperature: number
  motion: "normal" | "alert" | "fall"
  lastUpdate: string
}

export default function DashboardPage() {
  const [workers, setWorkers] = useState<Worker[]>([
    {
      id: "W001",
      name: "Rajesh Kumar",
      location: "Jharkhand Coal Mine - Sector A",
      gasLevel: 150,
      temperature: 32,
      motion: "normal",
      lastUpdate: new Date().toLocaleTimeString("en-IN"),
    },
    {
      id: "W002",
      name: "Amit Singh",
      location: "Jharkhand Coal Mine - Sector B",
      gasLevel: 280,
      temperature: 35,
      motion: "normal",
      lastUpdate: new Date().toLocaleTimeString("en-IN"),
    },
    {
      id: "W003",
      name: "Suresh Patel",
      location: "Mumbai Construction Site - Floor 12",
      gasLevel: 120,
      temperature: 38,
      motion: "alert",
      lastUpdate: new Date().toLocaleTimeString("en-IN"),
    },
    {
      id: "W004",
      name: "Vijay Sharma",
      location: "Delhi Metro Construction - Tunnel 3",
      gasLevel: 450,
      temperature: 29,
      motion: "normal",
      lastUpdate: new Date().toLocaleTimeString("en-IN"),
    },
    {
      id: "W005",
      name: "Ramesh Yadav",
      location: "Pune Industrial Plant - Zone C",
      gasLevel: 190,
      temperature: 31,
      motion: "normal",
      lastUpdate: new Date().toLocaleTimeString("en-IN"),
    },
    {
      id: "W006",
      name: "Prakash Mehta",
      location: "Gujarat Chemical Plant - Section 2",
      gasLevel: 320,
      temperature: 36,
      motion: "normal",
      lastUpdate: new Date().toLocaleTimeString("en-IN"),
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkers((prev) =>
        prev.map((worker) => ({
          ...worker,
          gasLevel: Math.max(0, Math.min(1000, worker.gasLevel + (Math.random() - 0.5) * 50)),
          temperature: Math.max(20, Math.min(50, worker.temperature + (Math.random() - 0.5) * 2)),
          motion:
            Math.random() > 0.98 ? "fall" : Math.random() > 0.9 ? "alert" : ("normal" as "normal" | "alert" | "fall"),
          lastUpdate: new Date().toLocaleTimeString("en-IN"),
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getWorkerStatus = (worker: Worker) => {
    if (worker.gasLevel > 500 || worker.temperature > 40 || worker.motion === "fall") return "danger"
    if (worker.gasLevel > 300 || worker.temperature > 35 || worker.motion === "alert") return "warning"
    return "safe"
  }

  const dangerCount = workers.filter((w) => getWorkerStatus(w) === "danger").length
  const warningCount = workers.filter((w) => getWorkerStatus(w) === "warning").length
  const safeCount = workers.filter((w) => getWorkerStatus(w) === "safe").length

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-accent-foreground/5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Live Worker Dashboard</h1>
          <p className="mt-2 text-lg text-muted-foreground">Real-time monitoring of all workers across India</p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="rounded-lg border border-border bg-card p-6 animate-slide-up hover:scale-105 transition-transform"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Total Workers</h3>
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-2 text-3xl font-bold text-card-foreground">{workers.length}</p>
          </div>

          <div
            className="rounded-lg border border-chart-2 bg-chart-2/10 p-6 animate-slide-up hover:scale-105 transition-transform"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Safe</h3>
              <CheckCircle className="h-5 w-5 text-chart-2" />
            </div>
            <p className="mt-2 text-3xl font-bold text-chart-2">{safeCount}</p>
          </div>

          <div
            className="rounded-lg border border-accent-foreground bg-accent-foreground/10 p-6 animate-slide-up hover:scale-105 transition-transform"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Warning</h3>
              <AlertTriangle className="h-5 w-5 text-accent-foreground" />
            </div>
            <p className="mt-2 text-3xl font-bold text-accent-foreground">{warningCount}</p>
          </div>

          <div
            className="rounded-lg border border-destructive bg-destructive/10 p-6 animate-slide-up hover:scale-105 transition-transform"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Danger</h3>
              <XCircle className="h-5 w-5 text-destructive" />
            </div>
            <p className="mt-2 text-3xl font-bold text-destructive">{dangerCount}</p>
          </div>
        </div>

        {/* Worker Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {workers.map((worker, index) => {
            const status = getWorkerStatus(worker)
            return (
              <div
                key={worker.id}
                className={`rounded-lg border-2 bg-card p-6 transition-all hover:scale-[1.02] animate-fade-in ${
                  status === "danger"
                    ? "border-destructive shadow-lg shadow-destructive/20 animate-glow"
                    : status === "warning"
                      ? "border-accent-foreground"
                      : "border-border"
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-card-foreground">{worker.name}</h3>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {worker.id}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{worker.location}</span>
                    </div>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      status === "danger"
                        ? "bg-destructive text-destructive-foreground"
                        : status === "warning"
                          ? "bg-accent text-accent-foreground"
                          : "bg-chart-2/20 text-chart-2"
                    }`}
                  >
                    {status.toUpperCase()}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Gas Level</p>
                    <p className="mt-1 text-xl font-bold text-card-foreground">{worker.gasLevel.toFixed(0)}</p>
                    <p className="text-xs text-muted-foreground">PPM</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full transition-all ${
                          worker.gasLevel > 500
                            ? "bg-destructive"
                            : worker.gasLevel > 300
                              ? "bg-accent-foreground"
                              : "bg-chart-2"
                        }`}
                        style={{ width: `${Math.min(100, (worker.gasLevel / 1000) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">Temperature</p>
                    <p className="mt-1 text-xl font-bold text-card-foreground">{worker.temperature.toFixed(1)}</p>
                    <p className="text-xs text-muted-foreground">°C</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full transition-all ${
                          worker.temperature > 40
                            ? "bg-destructive"
                            : worker.temperature > 35
                              ? "bg-accent-foreground"
                              : "bg-chart-2"
                        }`}
                        style={{ width: `${Math.min(100, (worker.temperature / 50) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">Motion</p>
                    <div className="mt-1 flex items-center gap-1.5">
                      {worker.motion === "normal" ? (
                        <CheckCircle className="h-4 w-4 text-chart-2" />
                      ) : worker.motion === "alert" ? (
                        <AlertTriangle className="h-4 w-4 text-accent-foreground" />
                      ) : (
                        <XCircle className="h-4 w-4 text-destructive" />
                      )}
                      <span className="text-sm font-medium capitalize text-card-foreground">{worker.motion}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Last updated: {worker.lastUpdate}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
