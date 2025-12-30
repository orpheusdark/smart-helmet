import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-2xl font-black tracking-tighter text-foreground">HELMGUARD</span>
            </div>
            <p className="text-muted-foreground max-w-sm font-medium tracking-tight">
              Real-time safety monitoring for industrial workers. Protecting those who build the world.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex gap-8">
              <span className="hover:text-foreground cursor-pointer transition-colors">Safety Standard 2.0</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">Industrial IoT</span>
            </div>
            <div className="mt-2">© 2025 HELMGUARD TECHNOLOGIES. ALL RIGHTS RESERVED.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
