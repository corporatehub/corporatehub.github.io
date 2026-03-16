import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Solutions - CorporateHub',
  description: 'CorporateHub integration and migration capabilities for connecting HubSpot, Jira, Tempo Timesheets, and Kantata/Mavenlink with Odoo.',
}

const solutions = [
  {
    title: "HubSpot ↔ Odoo",
    description: "Sync contacts, companies, and deals between HubSpot and Odoo &mdash; or migrate your full CRM history.",
    link: "/solutions/hubspot-odoo-sync-migration"
  },
  {
    title: "Jira ↔ Odoo",
    description: "Sync Jira issues, sprints, and workflows with Odoo projects &mdash; keep engineering and operations aligned.",
    link: "/solutions/jira-odoo-sync-migration"
  },
  {
    title: "Tempo Timesheets ↔ Odoo",
    description: "Pull Tempo timesheet entries into Odoo for consolidated billing and utilization reporting.",
    link: "/solutions/tempo-timesheets-odoo-sync-migration"
  },
  {
    title: "Kantata/Mavenlink ↔ Odoo",
    description: "Move project data, timesheets, and financials from Kantata/Mavenlink into Odoo &mdash; or keep both in sync.",
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
          We connect your existing tools with Odoo so your data flows into one integrated system.
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
          Need an integration not listed here? We build custom connectors for Odoo.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Footer tagline removed - brand alignment */}
    </div>
  )
}

