import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, ClipboardCheck, Clock, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'A Seamless Transition: Migrating from HubSpot to Odoo Without Downtime - CorporateHub',
  description: 'Discover how CorporateHub successfully migrated a mid-sized enterprise from HubSpot to Odoo with zero downtime and 100% data integrity.',
}

export default function HubSpotToOdooMigration() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          A Seamless Transition: Migrating from HubSpot to Odoo Without Downtime
        </h1>
      </header>

      <section className="mb-12">
        <p className="text-lg text-muted-foreground mb-4">
          When a growing mid-sized enterprise decided to scale its operations, they realized their current CRM solution, HubSpot, no longer aligned with their complex business needs. They sought a robust, customizable solution that could integrate effortlessly with their other systems. The natural choice was Odoo—but the prospect of migrating years of critical customer data without disrupting daily operations posed a significant challenge.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Migrating from HubSpot to Odoo required:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-4">
          <li>Ensuring <strong>data integrity</strong> across thousands of records, including contacts, deals, notes, and custom fields.</li>
          <li><strong>Mapping data fields</strong> accurately between the two platforms, despite structural differences.</li>
          <li>Guaranteeing a <strong>zero-downtime transition</strong> to avoid any interruption in sales and customer service activities.</li>
          <li>Managing a <strong>tight timeline</strong> to align with the client&apos;s business calendar.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">CorporateHub&apos;s Solution</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s Data Sync & Migration team stepped in with a structured, phased approach:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Comprehensive Assessment",
              items: [
                "We conducted a thorough audit of the client&apos;s HubSpot data, identifying critical data points, custom fields, and dependencies.",
                "Collaborated closely with the client&apos;s team to define mapping rules and prioritize essential features in Odoo."
              ],
              icon: ClipboardCheck
            },
            {
              title: "Custom Migration Blueprint",
              items: [
                "Designed a tailored migration strategy using our proprietary tools for HubSpot-to-Odoo migration.",
                "Developed a detailed mapping schema to ensure consistency and compatibility across both systems."
              ],
              icon: Zap
            },
            {
              title: "Data Validation and Testing",
              items: [
                "Performed a series of dry runs to validate data integrity and ensure successful mapping.",
                "Engaged key stakeholders in reviewing test migrations to confirm accuracy and completeness."
              ],
              icon: CheckCircle
            },
            {
              title: "Live Migration with Zero Downtime",
              items: [
                "Scheduled the live migration during off-peak hours.",
                "Leveraged incremental syncing techniques to keep data up-to-date throughout the migration process.",
                "Monitored the transition in real-time, addressing any issues immediately."
              ],
              icon: Clock
            },
            {
              title: "Post-Migration Support",
              items: [
                "Conducted comprehensive testing to ensure the functionality of the new CRM.",
                "Delivered training sessions to empower the client&apos;s team to utilize Odoo effectively.",
                "Provided ongoing support to fine-tune the system and address user feedback."
              ],
              icon: Users
            }
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {step.icon && <step.icon className="h-5 w-5 text-primary mr-2" />}
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Results</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The migration was completed successfully within the stipulated timeframe, achieving:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "100% Data Integrity", description: "No records lost or misaligned during the migration process.", icon: CheckCircle },
            { title: "Zero Downtime", description: "Sales and support teams continued operations uninterrupted.", icon: Clock },
            { title: "Optimized CRM Setup", description: "Tailored Odoo configuration to match the client&apos;s business processes.", icon: Zap }
          ].map((result, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {result.icon && <result.icon className="h-5 w-5 text-primary mr-2" />}
                  {result.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
        <Card>
          <CardContent className="pt-6">
            <blockquote className="text-lg text-muted-foreground italic">
              &quot;CorporateHub&apos;s team made what seemed like a daunting task remarkably smooth. The level of detail and professionalism throughout the process was outstanding. We transitioned to Odoo seamlessly and are already reaping the benefits of a more efficient system.&quot;
            </blockquote>
            <p className="mt-4 font-semibold">—Head of Operations</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose CorporateHub?</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s Data Sync & Migration services are designed to take the stress out of system transitions. Whether you&apos;re syncing systems or migrating to a new platform, we ensure your business keeps running smoothly, one step at a time.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Migrate Your CRM?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Contact CorporateHub today to discover how our tailored migration solutions can ensure a seamless transition for your business.
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
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

