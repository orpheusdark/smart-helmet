import { Mountain, HardHat, Factory, Radio } from "lucide-react"

export function UseCases() {
  const cases = [
    {
      icon: Mountain,
      title: "Mining Safety Monitoring",
      description: "Detect toxic gas leaks and monitor oxygen levels in underground tunnels",
      applications: ["Coal mines", "Metal ore extraction", "Underground operations"],
    },
    {
      icon: HardHat,
      title: "Construction Site Hazard Detection",
      description: "Track worker falls, extreme temperatures, and hazardous zone entry",
      applications: ["High-rise construction", "Heavy machinery zones", "Scaffolding work"],
    },
    {
      icon: Factory,
      title: "Confined Space Protection",
      description: "Monitor air quality and worker vitals in tanks, silos, and enclosed areas",
      applications: ["Chemical plants", "Storage facilities", "Maintenance operations"],
    },
    {
      icon: Radio,
      title: "Remote Safety Supervision",
      description: "Real-time tracking of multiple workers across distributed work sites",
      applications: ["Large construction sites", "Remote mining", "Multi-location projects"],
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Use Cases</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Versatile applications across mining, construction, and industrial sectors.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cases.map((useCase) => (
            <div key={useCase.title} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <useCase.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground">{useCase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {useCase.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {app}
                      </span>
                    ))}
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
