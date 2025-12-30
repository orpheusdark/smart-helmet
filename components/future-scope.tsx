import { Brain, MapPin, Link2, BarChart } from "lucide-react"

export function FutureScope() {
  const features = [
    {
      icon: Brain,
      title: "AI-Based Accident Prediction",
      description: "Machine learning models analyze patterns to predict potential accidents before they occur",
      impact: "Proactive safety measures",
    },
    {
      icon: MapPin,
      title: "GPS Worker Tracking",
      description: "Real-time location tracking for emergency response and site-wide worker visibility",
      impact: "Faster emergency dispatch",
    },
    {
      icon: Link2,
      title: "Industrial Safety System Integration",
      description: "Connect with existing SCADA, alarm systems, and facility management software",
      impact: "Unified safety ecosystem",
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Long-term data analysis for safety planning, risk assessment, and policy improvements",
      impact: "Data-driven safety culture",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Future Scope & Roadmap</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Next-generation features to enhance safety monitoring and emergency response.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-20">
                <feature.icon className="h-24 w-24" />
              </div>

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-3 py-1">
                  <span className="text-xs font-semibold text-accent-foreground">{feature.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-2 border-accent bg-accent/5 p-8 text-center">
          <p className="text-lg font-semibold text-foreground">
            Vision: Transform industrial safety from reactive to predictive
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Creating intelligent safety ecosystems that anticipate hazards and protect workers before incidents occur
          </p>
        </div>
      </div>
    </section>
  )
}
