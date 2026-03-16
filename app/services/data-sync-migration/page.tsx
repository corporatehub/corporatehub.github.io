import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight, Clock, Database, GitMerge, FolderSyncIcon as Sync } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Sync & Migration Services - CorporateHub',
  description: 'Your historical data from Harvest, Toggl, Xero, or Jira migrated into one system. No more exporting CSVs to build a profitability picture.',
}

export default function DataSyncMigrationService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Data Sync & Migration Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your historical data from Harvest, Toggl, Xero, or Jira migrated into one system
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          Most IT services agencies have timesheet data in one tool, accounting in another, and project tracking in a third. We bring it all into one system so you can see project profitability without exporting CSVs.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why CorporateHub</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">You get the author, not a re-seller</h3>
              <p className="text-muted-foreground">
                24 OCA modules on Odoo 18.0, including the professional services timesheet suite. When something needs fixing, I write the code.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Deployed in weeks, not months</h3>
              <p className="text-muted-foreground">
                Configuration-first: 80% standard module configuration, 20% custom to your workflow. Typical timeline: 1&ndash;3 weeks for a 10&ndash;30 person agency.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Open-source, no lock-in</h3>
              <p className="text-muted-foreground">
                Every module is OCA-published and open-source licensed. If you outgrow CorporateHub, your system stays. Your data stays.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Data Sync & Migration Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Sync className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">HubSpot and Odoo Sync</h3>
              </div>
              <p className="text-muted-foreground">
                Keep your marketing, sales, and operational data aligned in real time. Our HubSpot and Odoo sync solution ensures your teams always have up-to-date information for better decision-making.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <ArrowUpRight className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">HubSpot to Odoo Migration</h3>
              </div>
              <p className="text-muted-foreground">
                Switching from HubSpot to Odoo? We make the transition seamless by migrating your data with accuracy and integrity, ensuring your workflows continue without disruption.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <GitMerge className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Atlassian Jira and Odoo Sync</h3>
              </div>
              <p className="text-muted-foreground">
                Enable your teams to collaborate effortlessly by connecting Jira&apos;s issue tracking capabilities with Odoo&apos;s powerful business management features.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Tempo Timesheets and Odoo Sync</h3>
              </div>
              <p className="text-muted-foreground">
                Streamline time tracking and reporting by synchronizing Tempo Timesheets with Odoo. Gain real-time insights into resource utilization and project progress.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Kantata/Mavenlink to Odoo Migration</h3>
              </div>
              <p className="text-muted-foreground">
                Planning to migrate from Kantata/Mavenlink? We handle complex migrations with a focus on preserving data relationships, minimizing downtime, and ensuring a smooth switch to Odoo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How We Work</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Consultation", description: "We start by understanding your existing systems, processes, and pain points." },
            { title: "Planning", description: "A detailed project roadmap ensures a seamless integration or migration." },
            { title: "Execution", description: "Using proven tools and methodologies, we handle the technical aspects with precision." },
            { title: "Validation", description: "Rigorous testing ensures data accuracy and functionality." },
            { title: "Support", description: "Post-deployment support to address any challenges and fine-tune the solution." },
          ].map((step, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Benefits of Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Minimized Downtime", description: "We prioritize business continuity throughout the process." },
            { title: "Data Integrity", description: "No loss, duplication, or corruption of data during sync or migration." },
            { title: "Custom Configurations", description: "Tailored solutions to fit your business processes." },
            { title: "Expert Support", description: "Our team is available to assist you at every step." },
          ].map((benefit, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">See What This Looks Like for Your Agency</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          15-minute call to assess whether your current tools give you the project-level visibility you need.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Get Started with Data Sync & Migration
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

    </article>
  )
}

