import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileCheck, HeadphonesIcon, Rocket, Settings, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Deployment Services - CorporateHub',
  description: 'Full deployment of the professional services module suite: time tracking, utilization, project profitability, and role-based costing. Typically 1\u20133 weeks for a 10\u201330 person agency.',
}

export default function DeploymentService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Deployment Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Full deployment of the professional services module suite. Typically 1&ndash;3 weeks for a 10&ndash;30 person agency.
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          We deploy integrated time-tracking, utilization, project profitability, and role-based costing modules for IT services agencies. The difference: we wrote the modules. You get the author, not someone configuring someone else&apos;s software.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why CorporateHub for Deployment</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">You get the author, not a re-seller</h3>
              <p className="text-muted-foreground">
                24 OCA modules on Odoo 18.0, including the professional services timesheet suite. When something needs fixing or extending, I write the code.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Configuration-first methodology</h3>
              <p className="text-muted-foreground">
                80% of the system is standard module configuration, 20% is custom to your workflow. This is why deployment takes weeks, not months.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Deployed in weeks, not months</h3>
              <p className="text-muted-foreground">
                Typical timeline: 1&ndash;3 weeks remote deployment for a 10&ndash;30 person agency. We configure, migrate, train, and go live.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Open-source, no lock-in</h3>
              <p className="text-muted-foreground">
                Every module is OCA-published and open-source licensed. If you outgrow CorporateHub, your system stays. Your data stays. Another Odoo partner can pick up where we left off.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Deployment Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Deployment Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Discovery and Planning</h3>
              </div>
              <p className="text-muted-foreground">
                We start by understanding your current systems, processes, and goals. This phase ensures we design a deployment plan that aligns with your business needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Configuration and Customization</h3>
              </div>
              <p className="text-muted-foreground">
                Our experts configure Odoo modules to match your workflows. If needed, we tailor features to enhance functionality and usability for your team.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Data Migration</h3>
              </div>
              <p className="text-muted-foreground">
                Migrating critical business data can be daunting, but our tools and expertise ensure a safe and accurate transfer, so nothing gets left behind.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Integration with Existing Systems</h3>
              </div>
              <p className="text-muted-foreground">
                Need Odoo to work with other tools? We connect Odoo with platforms like HubSpot, Jira, Tempo Timesheets, and more into one integrated system.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Testing and Quality Assurance</h3>
              </div>
              <p className="text-muted-foreground">
                Before going live, we conduct rigorous testing to catch and resolve any issues. This ensures a smooth experience for your users from day one.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Deployment and Go-Live</h3>
              </div>
              <p className="text-muted-foreground">
                With all systems go, we execute the deployment plan, ensuring a smooth transition with minimal downtime.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <HeadphonesIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Post-Deployment Support</h3>
              </div>
              <p className="text-muted-foreground">
                Our job doesn&apos;t end at go-live. We offer ongoing support and troubleshooting to keep your system running smoothly and adapt to your evolving needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who Can Benefit from Our Deployment Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
          <li>Businesses migrating from legacy systems.</li>
          <li>Teams looking to implement Odoo for the first time.</li>
          <li>Organizations scaling their Odoo usage with additional modules and integrations.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">See What This Looks Like for Your Agency</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          15-minute call to assess whether your current tools give you the project-level visibility you need.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Get Started with Odoo Deployment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

    </article>
  )
}

