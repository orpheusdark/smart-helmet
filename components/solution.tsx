import { Shield, Wifi, Bell, Database } from "lucide-react"

export function Solution() {
  const features = [
    {
      icon: Shield,
      title: "Continuous Monitoring",
      description: "Sensors track environmental conditions and worker movements 24/7.",
    },
    {
      icon: Wifi,
      title: "Real-Time Processing",
      description: "ESP32 microcontroller analyzes data instantly for immediate detection.",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Automatic notifications trigger when safety thresholds are exceeded.",
    },
    {
      icon: Database,
      title: "Cloud Dashboard",
      description: "Supervisors monitor all workers from centralized web interface.",
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Proposed Solution</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            An intelligent IoT-enabled safety helmet that provides real-time hazard detection and emergency response.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-2 border-accent bg-accent/5 p-8">
          <h3 className="text-xl font-bold text-foreground">Key Benefits</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-accent-foreground">✓</span>
              <span className="text-sm text-foreground">Preventive safety through early hazard detection</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-foreground">✓</span>
              <span className="text-sm text-foreground">Faster emergency response saves lives</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-foreground">✓</span>
              <span className="text-sm text-foreground">Real-time supervisor oversight</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-foreground">✓</span>
              <span className="text-sm text-foreground">Scalable across entire workforce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
