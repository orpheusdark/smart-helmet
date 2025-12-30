import { Hero } from "@/components/hero"
import { ProblemStatement } from "@/components/problem-statement"
import { Solution } from "@/components/solution"
import { HardwareComponents } from "@/components/hardware-components"
import { TechnologyStack } from "@/components/technology-stack"
import { UseCases } from "@/components/use-cases"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProblemStatement />
      <Solution />
      <HardwareComponents />
      <TechnologyStack />
      <UseCases />
      <Footer />
    </main>
  )
}
