import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Calculator, Clock, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tuning Services - CorporateHub',
  description: 'Your Odoo is running but not showing what matters. We configure timesheet workflows, approval chains, and project profitability reports to match how you actually work.',
}

export default function TuningService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Tuning Services for Odoo
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your Odoo is running but not showing what matters. We configure timesheet workflows, approval chains, and project profitability reports to match how you actually work.
        </p>
      </header>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why CorporateHub for Tuning</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              We maintain 24 OCA modules on Odoo 18.0, including the professional services timesheet suite your system will run on. When a configuration change requires a module fix, we write the code &mdash; we do not file a ticket. Configuration-first methodology: 80% of the system is standard module configuration, 20% is custom to your workflow.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Our Tuning Expertise Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Tuning Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">HR Management</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced Accrual Time-Off Module: Simplify and customize accruals to match your policies.</li>
                <li>• Time-Off Credit Management: Ensure accurate tracking and adjustments.</li>
                <li>• Multi-Currency Contracts, Rates & Cost: Manage international teams with built-in currency support.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Project Management</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Project Roles and Related Features: Define roles and permissions for clear accountability.</li>
                <li>• Customizable Project Features: Enhance collaboration and tracking.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Timesheet Management</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Utilization Analysis and Reports: Gain insights into team efficiency and resource allocation.</li>
                <li>• Granular Billing Control: Define billing rules with precision.</li>
                <li>• Timesheet Approval Strategies: Streamline and secure approval processes.</li>
                <li>• Billable and Payable Entries Management: Maintain clear financial records.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calculator className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Accounting</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bank Statement Segmentation: Simplify reconciliation with segmented statements.</li>
                <li>• Exchange Rate Providers Integration: Automate currency updates for global operations.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">User Experience Enhancements</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Activity Reminders: Never miss a task with timely notifications.</li>
                <li>• Personalized Locale and Formatting Settings: Create a user-friendly experience for every team member.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How We Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Consultation",
              description: "We begin by understanding your business needs and pain points."
            },
            {
              title: "Customization",
              description: "Our team crafts solutions tailored to your processes."
            },
            {
              title: "Implementation",
              description: "We implement changes incrementally to minimize disruption."
            },
            {
              title: "Support",
              description: "Ongoing assistance ensures your system evolves with your business."
            }
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
      <section className="text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">See What This Looks Like for Your Agency</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          15-minute call to assess whether your current Odoo configuration gives you the project-level visibility you need.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Start Your Odoo Tuning Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </article>
  )
}

