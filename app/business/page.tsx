import { Building2, TrendingUp, Shield, IndianRupee, Target, Users, Globe } from "lucide-react"

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Business & Deployment Potential
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Scalable solution with strong market demand and measurable ROI across Indian industries.
          </p>
        </div>

        {/* Market Opportunity */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Market Opportunity in India</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border-2 border-border bg-card p-6 shadow-sm hover:border-orange-500/30 transition-colors group">
              <Globe className="h-10 w-10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Mining Sector</h3>
              <p className="mt-2 text-4xl font-black text-orange-600 dark:text-orange-400">2.5M+</p>
              <p className="mt-1 text-sm font-medium text-foreground/70">Workers in coal and mineral mining</p>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-6 shadow-sm hover:border-orange-500/30 transition-colors group">
              <Building2 className="h-10 w-10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Construction</h3>
              <p className="mt-2 text-4xl font-black text-orange-600 dark:text-orange-400">60M+</p>
              <p className="mt-1 text-sm font-medium text-foreground/70">Construction workers in infra projects</p>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-6 shadow-sm hover:border-orange-500/30 transition-colors group">
              <Users className="h-10 w-10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Industrial Plants</h3>
              <p className="mt-2 text-4xl font-black text-orange-600 dark:text-orange-400">15M+</p>
              <p className="mt-1 text-sm font-medium text-foreground/70">Workers in chemical, oil & gas facilities</p>
            </div>
          </div>
        </section>

        {/* Target Customers */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Target Customers</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border-2 border-border bg-card p-8 shadow-sm">
              <Target className="h-10 w-10 text-orange-600 dark:text-orange-400" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Primary Markets</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Coal India Limited and subsidiary mines",
                  "Construction companies (L&T, GMR, Reliance)",
                  "Metro rail projects (Delhi, Mumbai, Bangalore)",
                  "Oil & Gas (ONGC, Indian Oil, Reliance)",
                  "Chemical plants (Tata Chemicals, GAIL)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-bold text-foreground/80">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <TrendingUp className="h-10 w-10 text-destructive" />
              <h3 className="mt-4 text-xl font-semibold text-card-foreground">Key Benefits for Customers</h3>
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
                    Meet DGMS (Mining), BOCW (Construction) safety standards
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Cost Savings</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Lower insurance premiums and reduced downtime from incidents
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">ESG Compliance</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Improve ESG scores with demonstrable worker safety measures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Model */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Revenue Model (Indian Market)</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <IndianRupee className="h-10 w-10 text-chart-1" />
              <h3 className="mt-4 text-xl font-semibold text-card-foreground">Pricing Structure</h3>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <span className="text-sm text-muted-foreground">Hardware (per unit)</span>
                  <span className="text-lg font-bold text-foreground">₹12,000 - ₹16,000</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <span className="text-sm text-muted-foreground">Cloud subscription (per worker/month)</span>
                  <span className="text-lg font-bold text-foreground">₹400 - ₹800</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <span className="text-sm text-muted-foreground">Enterprise dashboard (per site/month)</span>
                  <span className="text-lg font-bold text-foreground">₹40,000 - ₹1,60,000</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <span className="text-sm text-muted-foreground">Installation & Training</span>
                  <span className="text-lg font-bold text-foreground">₹20,000 - ₹50,000</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <Shield className="h-10 w-10 text-chart-1" />
              <h3 className="mt-4 text-xl font-semibold text-card-foreground">Example Deployment</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Medium Mining Operation</p>
                  <p className="mt-1 text-xs text-muted-foreground">100 workers, 2-year contract</p>
                </div>
                <div className="space-y-2 rounded-lg bg-muted p-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hardware (100 units @ ₹14,000)</span>
                    <span className="font-semibold">₹14,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subscription (24 months @ ₹600/worker)</span>
                    <span className="font-semibold">₹14,40,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dashboard (24 months @ ₹80,000)</span>
                    <span className="font-semibold">₹19,20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Installation & Training</span>
                    <span className="font-semibold">₹35,000</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between font-bold text-foreground">
                    <span>Total Contract Value</span>
                    <span className="text-destructive">₹47,95,000</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  *Annual recurring revenue: ₹16,80,000 from subscriptions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scalability */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Scalability & Growth</h2>
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Technical Scalability</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Deploy 10 to 10,000+ workers without infrastructure changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Cloud-based architecture hosted on AWS Mumbai region</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Add new sensors through firmware updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Multi-language support (Hindi, Marathi, Bengali, Telugu)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Market Expansion</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Phase 1: Focus on coal mining states (Jharkhand, Odisha, Chhattisgarh)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Phase 2: Metro construction projects in tier-1 cities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Phase 3: Industrial manufacturing and chemical plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                    <span>Phase 4: Export to Southeast Asian markets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Return on Investment</h2>
          <div className="rounded-lg border border-border bg-gradient-to-br from-accent/10 to-background p-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Accident Prevention Savings</p>
                <p className="mt-2 text-3xl font-bold text-accent">₹50L - ₹2Cr</p>
                <p className="mt-1 text-xs text-muted-foreground">Per major accident prevented annually</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Insurance Premium Reduction</p>
                <p className="mt-2 text-3xl font-bold text-accent">15-25%</p>
                <p className="mt-1 text-xs text-muted-foreground">With documented safety improvements</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">ROI Timeline</p>
                <p className="mt-2 text-3xl font-bold text-accent">6-12 months</p>
                <p className="mt-1 text-xs text-muted-foreground">Typical payback period for deployments</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
