import { Shield, Wind, Thermometer, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-helmet.png"
          alt="HelmGuard Background"
          fill
          className="object-cover opacity-30 blur-[1px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-40 opacity-100">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            Next-Gen Protection
          </div>

          <h1 className="text-7xl font-bold tracking-tighter text-foreground lg:text-9xl text-balance leading-[0.85] uppercase drop-shadow-sm">
            HelmGuard
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-medium tracking-tight text-foreground lg:text-2xl text-balance drop-shadow-sm">
            Real-time safety monitoring for industrial workers.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-bold uppercase tracking-widest"
            >
              <Link href="/dashboard">Access Dashboard</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              <Link href="/architecture">System Architecture</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 w-full max-w-4xl">
            {[
              { icon: Wind, label: "Gas Detection" },
              { icon: Thermometer, label: "Temperature" },
              { icon: Shield, label: "Fall Detection" },
              { icon: Zap, label: "Instant Alerts" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card/90 backdrop-blur-md p-6 text-center hover:border-accent hover:shadow-2xl transition-all hover:-translate-y-1 animate-fade-in shadow-xl group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <item.icon className="h-10 w-10 text-accent transition-transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(var(--accent),0.3)]" />
                <span className="text-sm font-black uppercase tracking-widest text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
