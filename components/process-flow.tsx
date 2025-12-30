export function ProcessFlow() {
  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "Sensors continuously monitor gas levels, temperature, and worker movement",
    },
    {
      number: "02",
      title: "Processing",
      description: "ESP32 analyzes sensor data in real-time using predefined thresholds",
    },
    {
      number: "03",
      title: "Threshold Check",
      description: "System compares readings against safety limits for each parameter",
    },
    {
      number: "04",
      title: "Local Alert",
      description: "Buzzer and LED activate immediately if danger is detected",
    },
    {
      number: "05",
      title: "Cloud Upload",
      description: "Data transmitted to cloud platform via Wi-Fi connection",
    },
    {
      number: "06",
      title: "Notification",
      description: "Supervisors receive instant alerts on dashboard and mobile devices",
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Process Flow</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Step-by-step operation from sensor activation to supervisor notification.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="text-4xl font-bold text-accent-foreground">{step.number}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="absolute -bottom-3 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
