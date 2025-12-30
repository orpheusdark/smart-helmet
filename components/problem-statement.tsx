import { AlertCircle, Flame, Users, Clock } from "lucide-react"

export function ProblemStatement() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Toxic Gas Exposure",
      description:
        "Workers face life-threatening exposure to CO, methane, and other hazardous gases without real-time detection.",
    },
    {
      icon: Flame,
      title: "High Temperature Zones",
      description:
        "Extreme heat in mining tunnels and construction sites leads to heat exhaustion and critical safety risks.",
    },
    {
      icon: Users,
      title: "Worker Falls & Injuries",
      description:
        "Falls and accidents often go undetected, leading to delayed emergency response and severe consequences.",
    },
    {
      icon: Clock,
      title: "No Real-Time Monitoring",
      description:
        "Conventional safety equipment lacks real-time data transmission, preventing proactive intervention.",
    },
  ]

  return (
    <section className="border-b border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">The Problem</h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            Mining and construction industries face critical safety challenges that conventional equipment cannot
            address.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg hover:scale-105 animate-slide-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
            >
              <problem.icon className="h-10 w-10 text-destructive transition-transform group-hover:scale-110" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{problem.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-lg border border-border bg-card p-6 text-center animate-fade-in reveal-on-scroll"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-base font-medium text-card-foreground">
            Conventional safety helmets provide passive protection but lack{" "}
            <span className="text-accent underline decoration-accent/40 decoration-2 underline-offset-4 font-extrabold uppercase tracking-tight">
              intelligent monitoring
            </span>{" "}
            and{" "}
            <span className="text-accent underline decoration-accent/40 decoration-2 underline-offset-4 font-extrabold uppercase tracking-tight">
              emergency response capabilities
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
