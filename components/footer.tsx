import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-accent-foreground" />
            <span className="text-xl font-bold text-foreground">Smart Safety Helmet</span>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            IoT-based safety monitoring system for mining and construction industries
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>Project Demonstration</span>
            <span>•</span>
            <span>Industrial IoT Solution</span>
            <span>•</span>
            <span>Real-time Monitoring</span>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            © 2025 Smart Safety Helmet Project. Built for industrial safety innovation.
          </div>
        </div>
      </div>
    </footer>
  )
}
