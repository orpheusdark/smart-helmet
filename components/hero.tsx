import { Shield, AlertTriangle, Thermometer, Radio } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-background opacity-90" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent-foreground/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center animate-slide-in-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground w-fit animate-bounce-subtle">
              <Shield className="h-4 w-4" />
              IoT Safety Innovation
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
              Smart IoT Safety Helmet
            </h1>
            <p className="mt-4 text-xl text-muted-foreground lg:text-2xl text-balance">
              For Mining and Construction Workers
            </p>

            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Real-time monitoring of hazardous conditions to prevent industrial accidents.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform"
              >
                <Link href="/dashboard">View Live Dashboard</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <Link href="/architecture">System Architecture</Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: AlertTriangle, label: "Gas Detection" },
                { icon: Thermometer, label: "Temperature" },
                { icon: Radio, label: "Fall Detection" },
                { icon: Shield, label: "Instant Alerts" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center hover:border-accent-foreground hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <item.icon className="h-6 w-6 text-accent-foreground" />
                  <span className="text-xs font-medium text-card-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl animate-pulse-slow" />
              <img
                src="/images/chatgpt-20.png"
                alt="Smart Safety Helmet with IoT Sensors"
                className="relative rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
