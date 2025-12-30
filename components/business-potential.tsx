import { Building2, TrendingUp, Shield, DollarSign } from "lucide-react"

export function BusinessPotential() {
  return (
    <section className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Business & Deployment Potential
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Scalable solution with strong market demand and measurable ROI.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <Building2 className="h-10 w-10 text-accent-foreground" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Target Customers</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Mining companies (coal, metal, mineral extraction)",
                "Construction firms (residential, commercial, infrastructure)",
                "Industrial manufacturing plants",
                "Oil & gas facilities",
                "Chemical processing plants",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <TrendingUp className="h-10 w-10 text-accent-foreground" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Key Benefits</h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-semibold text-card-foreground">Reduced Accidents</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Early detection prevents 60-80% of preventable industrial accidents
                </p>
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Regulatory Compliance</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Meet OSHA, MSHA, and international safety standards
                </p>
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Cost Savings</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Lower insurance premiums and reduced downtime from incidents
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <Shield className="h-10 w-10 text-accent-foreground" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Scalability</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Deploy per worker or across entire work sites. Cloud-based infrastructure scales from 10 to 10,000+
              workers without infrastructure changes. Add new sensor types and monitoring capabilities through firmware
              updates.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <DollarSign className="h-10 w-10 text-accent-foreground" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Revenue Model</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between rounded bg-muted p-2">
                <span className="text-muted-foreground">Hardware (per unit)</span>
                <span className="font-semibold text-foreground">$150-200</span>
              </div>
              <div className="flex justify-between rounded bg-muted p-2">
                <span className="text-muted-foreground">Cloud subscription (per worker/month)</span>
                <span className="font-semibold text-foreground">$5-10</span>
              </div>
              <div className="flex justify-between rounded bg-muted p-2">
                <span className="text-muted-foreground">Enterprise dashboard</span>
                <span className="font-semibold text-foreground">$500-2000/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
