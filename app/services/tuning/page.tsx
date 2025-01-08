import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Calculator, Clock, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tuning Services - CorporateHub',
  description: 'Optimize your Odoo experience with CorporateHub\'s expert tuning services. We fine-tune your system for peak performance, focusing on HR, Project, Accounting, and UX enhancements.',
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
          At CorporateHub, we believe that Odoo should work for your business, not the other way around. Our tuning services are designed to adapt and refine your Odoo platform to match the unique needs of your business processes.
        </p>
      </header>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose CorporateHub for Odoo Tuning?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              We apply a one-size-doesn&apos;t-fit-all philosophy, focusing on tangible, incremental improvements that make a difference. By addressing subtle details and aligning Odoo with your business identity, we deliver a solution that truly fits.
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
                <li>• Multi-Currency Contracts, Rates & Cost: Seamlessly manage international teams with built-in currency support.</li>
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
              description: "We implement changes seamlessly to minimize disruption."
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
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Make Your Odoo Better</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your business is unique, and your Odoo system should reflect that. Whether you need a simple enhancement or a complete overhaul, CorporateHub is here to help. Contact us today to explore how we can tune Odoo to meet your goals.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Start Your Odoo Tuning Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
      <footer className="text-center mt-16">
        <p className="text-lg font-semibold text-primary">
          CorporateHub – Making Business Run Smoother, One Step at a Time
        </p>
      </footer>
    </article>
  )
}

