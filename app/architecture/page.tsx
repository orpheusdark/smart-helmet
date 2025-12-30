"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Cpu, Cloud, Smartphone, Radio, Database, Bell } from "lucide-react"

export default function ArchitecturePage() {
  const [activeFlow, setActiveFlow] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 5)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent-foreground/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">System Architecture</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            End-to-end IoT architecture with real-time data flow visualization
          </p>
        </div>

        {/* Animated Architecture Diagram */}
        <div className="mb-16 rounded-lg border border-border bg-card p-8 animate-slide-up">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Data Flow Architecture</h2>

          <div className="relative mx-auto max-w-5xl">
            {/* Layer 1: Sensors */}
            <div className="mb-12 flex items-center justify-center gap-8">
              <div
                className={`flex h-32 w-32 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                  activeFlow === 0
                    ? "border-accent-foreground bg-accent shadow-lg shadow-accent-foreground/30"
                    : "border-border bg-muted"
                }`}
              >
                <Radio className="h-8 w-8 text-accent-foreground" />
                <p className="mt-2 text-center text-xs font-medium">Sensors</p>
                <p className="text-[10px] text-muted-foreground">MQ-135, DHT22</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="mb-6 flex justify-center">
              <ArrowRight
                className={`h-8 w-8 rotate-90 transition-colors ${
                  activeFlow === 0 ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              />
            </div>

            {/* Layer 2: Microcontroller */}
            <div className="mb-12 flex items-center justify-center">
              <div
                className={`flex h-32 w-48 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                  activeFlow === 1
                    ? "border-accent-foreground bg-accent shadow-lg shadow-accent-foreground/30"
                    : "border-border bg-muted"
                }`}
              >
                <Cpu className="h-8 w-8 text-accent-foreground" />
                <p className="mt-2 text-center text-xs font-medium">ESP32 Microcontroller</p>
                <p className="text-[10px] text-muted-foreground">Data Processing & WiFi</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="mb-6 flex justify-center">
              <ArrowRight
                className={`h-8 w-8 rotate-90 transition-colors ${
                  activeFlow === 1 ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              />
            </div>

            {/* Layer 3: Cloud Services */}
            <div className="mb-12 flex items-center justify-center gap-8">
              <div
                className={`flex h-32 w-40 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                  activeFlow === 2
                    ? "border-accent-foreground bg-accent shadow-lg shadow-accent-foreground/30"
                    : "border-border bg-muted"
                }`}
              >
                <Cloud className="h-8 w-8 text-accent-foreground" />
                <p className="mt-2 text-center text-xs font-medium">Cloud Platform</p>
                <p className="text-[10px] text-muted-foreground">AWS / ThingSpeak</p>
              </div>

              <div
                className={`flex h-32 w-40 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                  activeFlow === 2
                    ? "border-accent-foreground bg-accent shadow-lg shadow-accent-foreground/30"
                    : "border-border bg-muted"
                }`}
              >
                <Database className="h-8 w-8 text-accent-foreground" />
                <p className="mt-2 text-center text-xs font-medium">Database</p>
                <p className="text-[10px] text-muted-foreground">Time-series Data</p>
              </div>
            </div>

            {/* Arrow Down - Split */}
            <div className="mb-6 flex justify-center gap-32">
              <ArrowRight
                className={`h-8 w-8 rotate-90 transition-colors ${
                  activeFlow === 2 ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              />
              <ArrowRight
                className={`h-8 w-8 rotate-90 transition-colors ${
                  activeFlow === 2 ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              />
            </div>

            {/* Layer 4: Applications */}
            <div className="flex items-center justify-center gap-8">
              <div
                className={`flex h-32 w-40 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                  activeFlow === 3
                    ? "border-accent-foreground bg-accent shadow-lg shadow-accent-foreground/30"
                    : "border-border bg-muted"
                }`}
              >
                <Smartphone className="h-8 w-8 text-accent-foreground" />
                <p className="mt-2 text-center text-xs font-medium">Dashboard</p>
                <p className="text-[10px] text-muted-foreground">Web & Mobile</p>
              </div>

              <div
                className={`flex h-32 w-40 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                  activeFlow === 4
                    ? "border-accent-foreground bg-accent shadow-lg shadow-accent-foreground/30"
                    : "border-border bg-muted"
                }`}
              >
                <Bell className="h-8 w-8 text-accent-foreground" />
                <p className="mt-2 text-center text-xs font-medium">Alert System</p>
                <p className="text-[10px] text-muted-foreground">SMS / Email / App</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Data flows automatically from sensors to cloud in real-time</p>
          </div>
        </div>

        {/* Component Details */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="mb-6 text-2xl font-bold text-foreground">System Components</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Hardware Layer</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-card-foreground">MQ-135 Gas Sensor</p>
                  <p className="text-sm text-muted-foreground">
                    Detects NH3, NOx, alcohol, benzene, smoke, CO2. Detection range: 10-1000 PPM
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">DHT22 Sensor</p>
                  <p className="text-sm text-muted-foreground">
                    Temperature: -40°C to 80°C (±0.5°C), Humidity: 0-100% RH (±2%)
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">MPU6050 Accelerometer</p>
                  <p className="text-sm text-muted-foreground">
                    6-axis motion tracking, fall detection algorithm with threshold monitoring
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">ESP32 Module</p>
                  <p className="text-sm text-muted-foreground">
                    Dual-core processor, WiFi connectivity, 520 KB SRAM, ultra-low power consumption
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Software Layer</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-card-foreground">Edge Processing</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time data filtering, threshold monitoring, and local alerts on ESP32
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Cloud Platform</p>
                  <p className="text-sm text-muted-foreground">
                    AWS IoT Core or ThingSpeak for data ingestion, processing, and storage
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Analytics Engine</p>
                  <p className="text-sm text-muted-foreground">
                    Pattern recognition, predictive alerts, and historical trend analysis
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Dashboard Application</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time monitoring, multi-worker views, customizable alerts, and reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Technical Specifications</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Power</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Rechargeable Li-ion 3000mAh</li>
                <li>12-16 hour battery life</li>
                <li>USB-C fast charging</li>
                <li>Low battery alerts</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Connectivity</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>WiFi 802.11 b/g/n</li>
                <li>2.4 GHz frequency</li>
                <li>Range: 100m open space</li>
                <li>Mesh networking capable</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Performance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Data update: Every 2 seconds</li>
                <li>Alert latency: {"<"}1 second</li>
                <li>99.9% uptime SLA</li>
                <li>IP65 dust/water resistant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
