import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, ArrowRight, PlusCircle, Settings, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support Services - CorporateHub',
  description: 'Post-deployment support for configuration changes, new modules, and version upgrades. We maintain the OCA modules your system runs on, so support comes from the source.',
}

export default function SupportService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Support Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Post-deployment support from the source &mdash; we maintain the OCA modules your system runs on
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          At CorporateHub, we understand that even the best software solutions need ongoing support to keep your business running at peak efficiency. Our tailored <strong>Support Services</strong> ensure your Odoo system stays optimized and aligned with your evolving business needs.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why CorporateHub for Support</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              We maintain 24 OCA modules on Odoo 18.0, including the professional services timesheet suite your system runs on. When you need a configuration change, a new module, or a version upgrade, support comes from the people who wrote the code &mdash; not a re-seller reading documentation.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Our Support Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Support Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Ongoing Maintenance & Issue Resolution</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Keep your Odoo environment running without interruption. Our experts provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Proactive monitoring and updates</li>
                <li>Rapid bug fixes and issue resolution</li>
                <li>Troubleshooting for system errors or unexpected behaviors</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Performance Optimization</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your business evolves, and so should your Odoo system. We help you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Fine-tune performance for speed and efficiency</li>
                <li>Identify and resolve bottlenecks</li>
                <li>Optimize workflows to reflect your current operations</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <PlusCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Custom Feature Enhancements</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Need new functionality or modifications? We&apos;ve got you covered:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Tailored feature updates to meet business requirements</li>
                <li>Expert advice on leveraging Odoo&apos;s capabilities</li>
                <li>Integration of third-party tools with your Odoo instance</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Activity className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">System Health Checks</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Stay ahead of potential issues with our comprehensive health assessments:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Regular audits to identify vulnerabilities</li>
                <li>Actionable insights to improve system reliability</li>
                <li>Recommendations for upgrades and enhancements</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">End-User Support & Training</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Help your team get the most out of Odoo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Quick support for user queries</li>
                <li>Personalized training sessions to enhance user expertise</li>
                <li>Resources and guides for day-to-day operations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              CorporateHub&apos;s support philosophy is rooted in understanding your business. We prioritize <strong>incremental improvements</strong> and tangible results, ensuring your Odoo system remains a powerful enabler for growth.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">See What Support From the Source Looks Like</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          15-minute call to assess whether your current tools give you the project-level visibility you need.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Contact Us Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

    </article>
  )
}

