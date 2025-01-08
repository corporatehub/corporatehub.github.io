import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Solutions - CorporateHub',
  description: 'Explore CorporateHub\'s tailored integration and migration solutions for HubSpot, Jira, Tempo Timesheets, and Kantata/Mavenlink with Odoo.',
}

const solutions = [
  {
    title: "HubSpot ↔ Odoo",
    description: "Dive into a real-world example of how we transitioned a business from HubSpot to Odoo without data loss.",
    link: "/case-studies/hubspot-to-odoo-migration"
  },
  {
    title: "Jira ↔ Odoo",
    description: "See how our integration expertise bridged Jira and Odoo for better project management.",
    link: "/case-studies/jira-odoo-integration"
  },
  {
    title: "Tempo Timesheets ↔ Odoo",
    description: "Read about how our sync solution ensured accurate timesheet data in Odoo.",
    link: "/case-studies/tempo-timesheets-odoo-sync"
  },
  {
    title: "Kantata/Mavenlink ↔ Odoo",
    description: "Discover how our migration solution simplified billing processes for complex projects.",
    link: "/solutions/kantata-mavenlink-odoo-sync-migration"
  }
]

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Our Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how CorporateHub can help streamline your business processes with our tailored integration and migration solutions.
        </p>
      </header>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <Button asChild variant="outline">
                  <Link href={solution.link} className="flex items-center">
                    {solution.title.includes("HubSpot") ? "Read the Story" : solution.title.includes("Jira") ? "Check Out the Integration" : solution.title.includes("Tempo") ? "See How It Works" : solution.title.includes("Kantata") ? "Explore the Solution" : "Learn More"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center rounded-lg px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We specialize in creating custom solutions tailored to your unique business needs. Let&apos;s discuss how we can help streamline your processes.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <footer className="text-center mt-16">
        <p className="text-lg font-semibold text-primary">
          CorporateHub – Making Business Run Smoother, One Step at a Time
        </p>
      </footer>
    </div>
  )
}

