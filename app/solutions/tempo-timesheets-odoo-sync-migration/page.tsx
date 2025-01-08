import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart, Clock, Database, FileCheck, GitMerge, RefreshCw, Settings, Users } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tempo Timesheets ↔ Odoo Sync & Migration - CorporateHub',
  description: 'Streamline time tracking and reporting by syncing Tempo Timesheets with Odoo using CorporateHub\'s integration solutions.',
}

export default function TempoTimesheetsOdooSyncMigration() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Tempo Timesheets ↔ Odoo Sync & Migration
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Unlock Seamless Integration Between Tempo Timesheets and Odoo
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          At CorporateHub, we specialize in aligning your tools to enhance efficiency and accuracy. Our Tempo Timesheets ↔ Odoo Sync & Migration solution bridges the gap between these platforms, ensuring your data flows seamlessly without disruption.
        </p>
      </section>

      {/* Why Sync Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Sync Tempo Timesheets with Odoo?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Tempo Timesheets is a powerful tool for tracking time and project resources, while Odoo offers comprehensive business management features. By integrating these two systems, you can:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Streamline Workflow</h3>
              <p className="text-muted-foreground">
                Eliminate manual data entry between systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Enhance Decision-Making</h3>
              <p className="text-muted-foreground">
                Access accurate, consolidated data for resource planning and billing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Improve Accuracy</h3>
              <p className="text-muted-foreground">
                Minimize errors caused by inconsistent or duplicated records.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Sync Solution Highlights</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Two-Way Data Synchronization</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Keep data updated across both platforms, including timesheet entries, project details, and billing information.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Customizable Mapping</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Tailor the synchronization to your unique processes, ensuring every data point aligns with your business needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Real-Time Updates</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Instant updates between Tempo Timesheets and Odoo for better tracking and decision-making.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Migration Solution Highlights</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Database className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Complete Data Migration</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Move historical timesheets, projects, and related data from Tempo Timesheets to Odoo without loss or corruption.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <GitMerge className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Structured Transition</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Ensure smooth onboarding with no downtime or workflow interruptions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <FileCheck className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Validation & Testing</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Rigorous data validation to guarantee accuracy after migration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who Is This For?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              This solution is perfect for businesses aiming to consolidate their project management, timesheet tracking, and accounting in Odoo while preserving the value of Tempo Timesheets&apos; detailed data.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* How CorporateHub Makes It Happen Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How CorporateHub Makes It Happen</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We bring expertise and a proven methodology to every sync and migration project:
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Consultation", description: "Understand your business processes and requirements." },
            { title: "Custom Configuration", description: "Build the sync or migration process around your workflows." },
            { title: "Data Testing & Validation", description: "Ensure accuracy and consistency before full deployment." },
            { title: "Deployment & Training", description: "Seamlessly implement the solution and train your team for success." },
            { title: "Ongoing Support", description: "Stay confident with dedicated support after implementation." },
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

      {/* Results You Can Expect Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Results You Can Expect</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <GitMerge className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Unified Systems</h3>
              </div>
              <p className="text-muted-foreground">
                A single source of truth for time tracking, billing, and resource planning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Increased Productivity</h3>
              </div>
              <p className="text-muted-foreground">
                Time saved by automating data transfer and reconciliation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <BarChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Better Insights</h3>
              </div>
              <p className="text-muted-foreground">
                Consolidated reporting for smarter business decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted rounded-lg px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Integrate Tempo Timesheets and Odoo with confidence. CorporateHub is here to ensure your sync or migration is smooth, efficient, and tailored to your business needs.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="/contact">
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <footer className="text-center mt-16">
        <p className="text-lg font-semibold text-primary">
          CorporateHub – Making business run smoother – one step at a time.
        </p>
      </footer>
    </article>
  )
}

