import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Database, RefreshCw, Settings, Shield, Users } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kantata/Mavenlink ↔ Odoo Sync & Migration - CorporateHub',
  description: 'Optimize your project management and resource planning by integrating Kantata/Mavenlink with Odoo using CorporateHub\'s solutions.',
}

export default function KantataMavenlinkOdooSyncMigration() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Kantata/Mavenlink ↔ Odoo Sync & Migration
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Streamline Your Workflow with Seamless Integration
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          At <strong>CorporateHub</strong>, we understand that every business process contributes to your unique identity. Whether you&apos;re looking to sync real-time data between <strong>Kantata/Mavenlink</strong> and <strong>Odoo</strong> or migrate your data for a complete platform shift, our tailored solutions are here to make the transition effortless.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          With our <strong>one-size-doesn&apos;t-fit-all</strong> approach, we ensure that the integration or migration is aligned with your business goals, capturing every subtle detail that matters.
        </p>
      </section>

      {/* Why Choose Our Solution Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Solution?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Smooth Data Flow</h3>
              <p className="text-muted-foreground">
                Maintain synchronized data between Kantata/Mavenlink and Odoo, ensuring your teams work with the most up-to-date information at all times.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Reliable Migration</h3>
              <p className="text-muted-foreground">
                Transition your data from Kantata/Mavenlink to Odoo with zero downtime and complete data integrity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Custom-Tuned Processes</h3>
              <p className="text-muted-foreground">
                We adapt the sync and migration process to meet your specific business needs, avoiding disruptions and ensuring compatibility with your workflows.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Incremental Results</h3>
              <p className="text-muted-foreground">
                Our approach focuses on delivering tangible improvements step by step, giving you measurable benefits at every stage.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Features of Kantata/Mavenlink ↔ Odoo Sync & Migration</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Bidirectional Sync</h3>
              </div>
              <p className="text-muted-foreground">
                Keep your data in sync across both platforms, including project details, resources, timesheets, and financials.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Data Integrity Assurance</h3>
              </div>
              <p className="text-muted-foreground">
                Safeguard the accuracy and completeness of your data during migration with rigorous checks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Custom Field Mapping</h3>
              </div>
              <p className="text-muted-foreground">
                Map and adapt fields between Kantata/Mavenlink and Odoo to reflect your unique workflows.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Automated Updates</h3>
              </div>
              <p className="text-muted-foreground">
                Schedule automated updates for real-time synchronization without manual intervention.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Historical Data Migration</h3>
              </div>
              <p className="text-muted-foreground">
                Move your entire project history, timesheets, and financial records to Odoo without missing a beat.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
              </div>
              <p className="text-muted-foreground">
                An intuitive setup process and ongoing support make integration or migration easy for your team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When to Opt Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">When Should You Opt for This Solution?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
          <li>You&apos;re transitioning from Kantata/Mavenlink to Odoo for enhanced functionality.</li>
          <li>You need to unify data for better decision-making and operational efficiency.</li>
          <li>Your business processes require both systems to stay synchronized in real-time.</li>
        </ul>
      </section>

      {/* How We Make It Happen Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How We Make It Happen</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Consultation & Planning", description: "We start by understanding your current setup, pain points, and goals." },
            { title: "Custom Configuration", description: "Tailor the integration or migration to your specific requirements, including mapping custom fields and workflows." },
            { title: "Data Validation", description: "Verify data accuracy to avoid duplication, errors, or loss." },
            { title: "Deployment", description: "Implement the solution with minimal disruption to your operations." },
            { title: "Ongoing Support", description: "Post-deployment, we&apos;re here to fine-tune, troubleshoot, and ensure everything runs smoothly." },
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

      {/* Let&apos;s Make It Simple Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Let&apos;s Make It Simple for You</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground mb-4">
              Migrating or syncing your data doesn&apos;t have to be a hassle. <strong>CorporateHub</strong> takes the complexity out of integration and migration, ensuring your systems work together seamlessly so you can focus on what really matters—growing your business.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted rounded-lg px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Ready to simplify your processes and enhance your efficiency?</h2>
        <Button asChild size="lg" className="gap-2">
          <Link href="/contact">
            Contact Us Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <footer className="text-center mt-16">
        <p className="text-lg font-semibold text-primary">
          CorporateHub – Making business run smoother—one step at a time.
        </p>
      </footer>
    </article>
  )
}

