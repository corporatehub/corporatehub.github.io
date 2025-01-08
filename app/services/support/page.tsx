import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, ArrowRight, PlusCircle, Settings, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support Services - CorporateHub',
  description: 'Get reliable, ongoing assistance for your Odoo system with CorporateHub\'s support services. We ensure your Odoo environment stays optimized and aligned with your evolving business needs.',
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
          Making Business Run Smoother – One Step at a Time
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          At CorporateHub, we understand that even the best software solutions need ongoing support to keep your business running at peak efficiency. Our tailored <strong>Support Services</strong> ensure your Odoo system stays optimized and aligned with your evolving business needs.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose CorporateHub Support?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              With our one-size-doesn&apos;t-fit-all approach, we focus on delivering support that addresses the unique challenges of your business. From quick troubleshooting to strategic optimizations, our support solutions are designed to handle the subtleties that define your business processes.
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
                Keep your Odoo environment running seamlessly. Our experts provide:
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
                <li>Seamless integration of third-party tools</li>
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
                Empower your team to get the most out of Odoo:
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
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Simplify Your Odoo Experience</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you&apos;re resolving a critical issue or looking for continuous improvements, our support team is here to help. With CorporateHub, your business runs smoother – one step at a time.
        </p>
        <p className="text-2xl font-bold mb-8">Ready for hassle-free support?</p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Contact Us Today
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

