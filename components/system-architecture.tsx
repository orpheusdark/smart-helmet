import { ArrowRight } from "lucide-react"

export function SystemArchitecture() {
  const stages = [
    { label: "Sensors", sublabel: "Gas, Temp, IMU" },
    { label: "ESP32", sublabel: "Processing" },
    { label: "Wi-Fi", sublabel: "Transmission" },
    { label: "Cloud", sublabel: "Platform" },
    { label: "Dashboard", sublabel: "Monitoring" },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">System Architecture</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            End-to-end data flow from sensor to supervisor dashboard.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
          {stages.map((stage, index) => (
            <div key={stage.label} className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-border bg-card">
                  <span className="text-lg font-bold text-card-foreground">{stage.label}</span>
                  <span className="text-xs text-muted-foreground">{stage.sublabel}</span>
                </div>
              </div>

              {index < stages.length - 1 && <ArrowRight className="hidden h-6 w-6 text-muted-foreground lg:block" />}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">Data Flow</h3>
            <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-mono text-accent-foreground">1.</span>
                <span>Sensors collect environmental and movement data</span>
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-accent-foreground">2.</span>
                <span>ESP32 processes readings in real-time</span>
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-accent-foreground">3.</span>
                <span>Threshold comparison triggers local alerts</span>
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-accent-foreground">4.</span>
                <span>Data transmitted to cloud via Wi-Fi</span>
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-accent-foreground">5.</span>
                <span>Dashboard displays worker status</span>
              </li>
            </ol>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">Alert Mechanisms</h3>
            <div className="mt-4 space-y-4">
              <div className="rounded border border-accent/30 bg-accent/5 p-3">
                <p className="text-sm font-semibold text-foreground">Local Alerts</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Buzzer and LED activate on helmet for immediate worker notification
                </p>
              </div>
              <div className="rounded border border-accent/30 bg-accent/5 p-3">
                <p className="text-sm font-semibold text-foreground">Cloud Alerts</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Supervisor dashboard shows real-time warnings and worker locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
