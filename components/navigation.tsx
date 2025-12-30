"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HardHat, BarChart3, Building2, Network, Users } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: HardHat },
    { href: "/dashboard", label: "Live Dashboard", icon: BarChart3 },
    { href: "/architecture", label: "System Architecture", icon: Network },
    { href: "/business", label: "Business & Deployment", icon: Building2 },
    { href: "/team", label: "Team", icon: Users },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <HardHat className="h-6 w-6 text-accent-foreground" />
            <span>Smart IoT Safety Helmet</span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
