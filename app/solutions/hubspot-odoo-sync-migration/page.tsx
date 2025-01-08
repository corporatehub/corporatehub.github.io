import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart, Database, RefreshCw, Settings, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HubSpot ↔ Odoo Sync & Migration - CorporateHub',
  description: 'Seamlessly connect your sales and operations with CorporateHub\'s HubSpot to Odoo sync and migration solutions.',
}

export default function HubSpotOdooSyncMigration() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          HubSpot ↔ Odoo Sync & Migration
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Seamlessly Connect Your Sales and Operations
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          Unlock the full potential of your business by integrating HubSpot with Odoo. Whether you&apos;re looking to sync data in real-time or migrate your historical data with precision, CorporateHub has you covered. With our tailored approach, your business systems will work in harmony, saving you time, reducing errors, and driving productivity.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose CorporateHub for HubSpot ↔ Odoo Integration?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">One-Size-Doesn&apos;t-Fit-All Approach</h3>
              <p className="text-muted-foreground">
                We understand that every business is unique. That&apos;s why we design solutions that align with your workflows and business goals, ensuring a seamless integration process.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Incremental, Tangible Results</h3>
              <p className="text-muted-foreground">
                Our focus is on delivering measurable improvements. With each phase of the integration or migration, you&apos;ll experience real benefits that keep your business moving forward.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Expertise You Can Trust</h3>
              <p className="text-muted-foreground">
                From consultation to support, our team of experts brings deep knowledge of both HubSpot and Odoo, ensuring every detail is addressed with care.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Features of Our HubSpot ↔ Odoo Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Real-Time Data Sync</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Automatically sync key data between HubSpot and Odoo</li>
                <li>Sync contacts, companies, deals, and custom fields</li>
                <li>Ensure both systems stay up-to-date, minimizing manual data entry and discrepancies</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Advanced Customization</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Map fields according to your unique needs</li>
                <li>Define triggers and workflows for automated updates</li>
                <li>Configure data synchronization frequency to suit your operations</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Reliable Data Migration</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Migrate your historical HubSpot data into Odoo without hassle</li>
                <li>Preserve data integrity, including notes, attachments, and activity logs</li>
                <li>Get a full audit trail to ensure no information is lost</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Benefits of HubSpot ↔ Odoo Integration</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Boost Efficiency</h3>
              </div>
              <p className="text-muted-foreground">
                By automating data exchange, your teams can focus on core tasks rather than repetitive manual updates.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Improve Collaboration</h3>
              </div>
              <p className="text-muted-foreground">
                Align your sales and operational teams with shared, accurate data across platforms.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <BarChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Enhance Decision-Making</h3>
              </div>
              <p className="text-muted-foreground">
                Access consolidated insights from HubSpot and Odoo to make smarter, data-driven decisions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Scale Without Stress</h3>
              </div>
              <p className="text-muted-foreground">
                Our solutions are designed to grow with your business, ensuring seamless performance even as your data volume increases.
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
            { title: "Consultation", description: "We&apos;ll work with you to understand your business needs and define the integration or migration scope." },
            { title: "Design & Configuration", description: "Our experts will craft a tailored solution, including custom mappings, workflows, and sync settings." },
            { title: "Testing & Validation", description: "Before deployment, we rigorously test the integration to ensure flawless performance and data accuracy." },
            { title: "Deployment", description: "We implement the solution with minimal disruption to your operations." },
            { title: "Training & Support", description: "Our team provides thorough training and ongoing support, so your staff can make the most of the integration." },
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

      {/* CTA Section */}
      <section className="text-center bg-muted rounded-lg px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Streamline your business processes with CorporateHub&apos;s HubSpot ↔ Odoo Sync & Migration solutions. Contact us today to schedule a consultation and take the first step toward seamless business operations.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="/contact">
            Schedule a Consultation
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

