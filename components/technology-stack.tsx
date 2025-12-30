import { Code, Wifi, Cloud, BarChart3, Bell } from "lucide-react"

export function TechnologyStack() {
  const stack = [
    {
      icon: Code,
      category: "Embedded Firmware",
      technologies: ["Arduino IDE", "Embedded C/C++", "ESP-IDF"],
    },
    {
      icon: Wifi,
      category: "Communication",
      technologies: ["Wi-Fi (802.11)", "HTTP/HTTPS", "MQTT Protocol"],
    },
    {
      icon: Cloud,
      category: "Cloud Platform",
      technologies: ["Firebase / Blynk", "ThingSpeak", "Real-time Database"],
    },
    {
      icon: BarChart3,
      category: "Dashboard",
      technologies: ["React.js", "WebSockets", "Chart.js"],
    },
    {
      icon: Bell,
      category: "Alert System",
      technologies: ["SMS Notifications", "Email Alerts", "Push Notifications"],
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Software & Technology Stack</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Modern technologies enabling seamless data collection, transmission, and visualization.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <div key={item.category} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
                  <item.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground">{item.category}</h3>
              </div>

              <ul className="mt-4 space-y-2">
                {item.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
