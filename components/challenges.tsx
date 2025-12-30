import { Wifi, Settings, Battery, Cloud } from "lucide-react"

export function Challenges() {
  const challenges = [
    {
      icon: Wifi,
      title: "Network Dependency",
      issue: "Requires stable Wi-Fi connectivity for cloud data transmission",
      mitigation: "Local data buffering and offline alert system ensure critical notifications",
    },
    {
      icon: Settings,
      title: "Sensor Calibration",
      issue: "Gas and temperature sensors require periodic calibration for accuracy",
      mitigation: "Automated calibration reminders and simplified calibration procedures",
    },
    {
      icon: Battery,
      title: "Battery Management",
      issue: "Continuous operation requires reliable power source",
      mitigation: "Low-power modes, battery level monitoring, and quick-charge capability",
    },
    {
      icon: Cloud,
      title: "Harsh Environments",
      issue: "Dust, moisture, and impacts can affect electronic components",
      mitigation: "IP54-rated enclosure and ruggedized design for industrial conditions",
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Challenges & Dependencies</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Technical considerations and mitigation strategies for deployment.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {challenges.map((challenge) => (
            <div key={challenge.title} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
                    <challenge.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">{challenge.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{challenge.issue}</p>
                  <div className="mt-3 rounded bg-muted p-3">
                    <p className="text-xs font-medium text-foreground">Mitigation:</p>
                    <p className="mt-1 text-xs text-muted-foreground">{challenge.mitigation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
