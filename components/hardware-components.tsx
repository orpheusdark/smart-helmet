import { Cpu, Radio, Thermometer, Gauge, Bell, Battery, HardHat } from "lucide-react"
import Image from "next/image"

export function HardwareComponents() {
  const components = [
    {
      icon: Cpu,
      name: "ESP32 Microcontroller",
      purpose: "Central processing unit with built-in Wi-Fi for data processing and transmission",
      specs: "240MHz, Wi-Fi, Bluetooth",
    },
    {
      icon: Gauge,
      name: "MQ-2 / MQ-135 Gas Sensor",
      purpose: "Detects toxic gases (CO, methane, LPG) in mining and construction environments",
      specs: "Analog output, PPM detection",
    },
    {
      icon: Thermometer,
      name: "DHT11 / DHT22 Sensor",
      purpose: "Monitors ambient temperature and humidity levels",
      specs: "0-50°C, ±2°C accuracy",
    },
    {
      icon: Radio,
      name: "MPU6050 (IMU)",
      purpose: "Accelerometer and gyroscope for fall detection and motion tracking",
      specs: "6-axis, I2C interface",
    },
    {
      icon: Bell,
      name: "Buzzer & LEDs",
      purpose: "Local alert system to warn worker of immediate danger",
      specs: "Piezo buzzer, RGB LEDs",
    },
    {
      icon: Battery,
      name: "Li-ion Battery",
      purpose: "Rechargeable power source for extended operation",
      specs: "3.7V, 2000mAh capacity",
    },
    {
      icon: HardHat,
      name: "Helmet Casing",
      purpose: "Rugged industrial-grade housing for all electronic components",
      specs: "Impact resistant, IP54",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground uppercase">Hardware Components</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Industrial-grade sensors and electronics for reliable operation in harsh environments.
          </p>
        </div>

        <div className="mt-16 relative aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <Image
            src="/images/hardware-schematic.png"
            alt="HelmGuard Hardware Schematic"
            fill
            className="object-contain p-8"
          />
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <div
              key={component.name}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
                    <component.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">{component.name}</h3>
                  <p className="mt-1 text-xs font-mono text-accent-foreground">{component.specs}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{component.purpose}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
