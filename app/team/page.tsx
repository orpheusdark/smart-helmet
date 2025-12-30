import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Trophy } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const team = [
    {
      name: "Nirant Chavda",
      role: "Team Leader",
      institution: "PIET (Parul Institute of Engineering and Technology)",
      image: "/images/nirant-chavda.jpg", // Updated to use local Nirant's image
      expertise: ["IoT Systems", "Hardware Integration", "Project Management"],
    },
    {
      name: "Rhythm Chavda",
      role: "Team Member",
      institution: "Parul Polytechnic Institute",
      image: "/images/whatsapp-20image-202025-01-07-20at-208.jpg",
      expertise: ["Sensor Integration", "Circuit Design", "Testing"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary">
              <Trophy className="mr-1 h-3 w-3" />
              PU Code Hackathon 3.0
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Meet Our Team</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Innovators behind the Smart IoT Safety Helmet project, developed for PU Code Hackathon 3.0
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-border bg-card">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <Badge variant="secondary" className="mb-3">
                        {member.role}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-muted-foreground">
                      <GraduationCap className="mt-1 h-4 w-4 flex-shrink-0" />
                      <p className="text-sm">{member.institution}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Key Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <Badge key={i} variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hackathon Info */}
          <Card className="mt-12 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Trophy className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">PU Code Hackathon 3.0</h3>
                  <p className="text-muted-foreground">
                    This Smart IoT Safety Helmet project was developed as part of PU Code Hackathon 3.0, demonstrating
                    innovative solutions for industrial safety using IoT technology and real-time monitoring systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Stats */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Card className="border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="mb-2 text-3xl font-bold text-primary">2</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="mb-2 text-3xl font-bold text-primary">6+</div>
                <p className="text-sm text-muted-foreground">IoT Sensors Integrated</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="mb-2 text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Hackathon Dedication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
