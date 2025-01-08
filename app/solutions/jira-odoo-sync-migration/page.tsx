import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart, Bell, Briefcase, Database, DollarSign, GitMerge, RefreshCw, Settings, Users } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jira ↔ Odoo Sync & Migration - CorporateHub',
  description: 'Enhance project collaboration by integrating Jira with Odoo using CorporateHub\'s sync and migration solutions.',
}

export default function JiraOdooSyncMigration() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Jira ↔ Odoo Sync & Migration
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Streamline Collaboration Between Teams
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          CorporateHub&apos;s Jira ↔ Odoo Sync & Migration solution is designed to simplify workflows and enhance collaboration by integrating the robust project management capabilities of Jira with the all-in-one business efficiency of Odoo. Whether you&apos;re migrating data, syncing platforms, or both, we make the process seamless and tailored to your needs.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Solution?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Customized Synchronization</h3>
              <p className="text-muted-foreground">
                Align Jira tasks, issues, and projects with Odoo&apos;s project and task management features. Our solution adapts to your workflows and priorities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Accurate Data Migration</h3>
              <p className="text-muted-foreground">
                Migrate your Jira data to Odoo with precision, ensuring all issues, comments, attachments, and histories remain intact.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Incremental Results</h3>
              <p className="text-muted-foreground">
                Our step-by-step approach minimizes disruption and delivers tangible improvements at every stage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p className="text-muted-foreground">
                Perfect for businesses of all sizes, ensuring that your integration grows with you.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground">
                From consultation to post-deployment assistance, we&apos;re here every step of the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Real-Time Sync</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Keep teams aligned by automatically syncing tasks, statuses, and priorities across Jira and Odoo.</li>
                <li>Bidirectional updates ensure that changes made in one platform are instantly reflected in the other.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Comprehensive Migration</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Migrate Jira issues, sprints, workflows, and attachments to Odoo without data loss.</li>
                <li>Map fields and statuses intelligently to ensure a smooth transition.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Custom Field Mapping</h3>
              </div>
              <p className="text-muted-foreground">
                Tailor field mappings between Jira and Odoo to reflect your specific business processes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <GitMerge className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Workflow Alignment</h3>
              </div>
              <p className="text-muted-foreground">
                Integrate Odoo&apos;s ERP capabilities with Jira&apos;s issue-tracking to create an end-to-end project lifecycle management system.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Bell className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Error Handling & Notifications</h3>
              </div>
              <p className="text-muted-foreground">
                Automated error detection with clear notifications for resolution ensures uninterrupted syncing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who Benefits From This Solution?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Project Managers</h3>
              </div>
              <p className="text-muted-foreground">
                Gain better visibility into project progress and resource allocation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <BarChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Developers & Tech Teams</h3>
              </div>
              <p className="text-muted-foreground">
                Collaborate more effectively with other departments using Odoo.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Finance Teams</h3>
              </div>
              <p className="text-muted-foreground">
                Use synced data to align budgets and expenses with project timelines.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Operations Managers</h3>
              </div>
              <p className="text-muted-foreground">
                Simplify cross-department coordination and reduce manual data entry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Process</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Consultation", description: "We start by understanding your unique workflows and identifying key requirements for integration or migration." },
            { title: "Solution Design", description: "Our experts create a tailored plan to align Jira and Odoo with your operational goals." },
            { title: "Implementation", description: "Whether syncing or migrating, our team ensures minimal disruption while setting up the solution." },
            { title: "Testing", description: "Extensive testing guarantees smooth operation, accurate data handling, and full compatibility." },
            { title: "Training & Support", description: "We equip your teams with the knowledge to leverage the integration and provide ongoing assistance." },
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

      {/* Why CorporateHub Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why CorporateHub?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              CorporateHub combines technical expertise with a customer-first approach to deliver solutions that make business processes smoother. We focus on achieving incremental results while ensuring that the unique aspects of your business identity are preserved.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted rounded-lg px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Unlock the full potential of your project and business management tools with CorporateHub&apos;s Jira ↔ Odoo Sync & Migration solution.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="/contact">
            Contact Us Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <footer className="text-center mt-16">
        <p className="text-lg font-semibold text-primary">
          CorporateHub – Making business run smoother — one step at a time.
        </p>
      </footer>
    </article>
  )
}

