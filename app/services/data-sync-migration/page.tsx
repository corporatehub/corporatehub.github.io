import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight, Clock, Database, GitMerge, FolderSyncIcon as Sync } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Sync & Migration Services - CorporateHub',
  description: 'Seamlessly integrate your business tools with CorporateHub\'s data sync and migration services for Odoo. We ensure smooth transitions and efficient data flow between systems.',
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
          Seamless Integration for Business Growth
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          In today&apos;s fast-paced business environment, ensuring your systems work together without hiccups is crucial. At CorporateHub, we specialize in making your data transition and synchronization processes smooth, efficient, and tailored to your unique business needs.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose CorporateHub?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">One-Size-Doesn&apos;t-Fit-All Approach</h3>
              <p className="text-muted-foreground">
                We recognize that no two businesses are alike. That&apos;s why we customize every data sync and migration project to suit your specific requirements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Focus on Incremental Results</h3>
              <p className="text-muted-foreground">
                Whether it&apos;s syncing two platforms or a complete migration, we ensure every step delivers measurable value.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Preserving Your Business Identity</h3>
              <p className="text-muted-foreground">
                Your business processes are unique, and so are the nuances that make them work. We ensure every subtle detail is carried forward flawlessly.
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
        <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let&apos;s make your data work for you. Contact CorporateHub today to learn how our Data Sync & Migration services can enhance your business processes and drive growth.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Get Started with Data Sync & Migration
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

