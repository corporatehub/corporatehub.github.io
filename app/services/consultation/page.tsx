import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consultation Services - CorporateHub',
  description: 'We assess your current tool stack and map where profitability visibility breaks down. Outcome: a deployment plan with scope, timeline, and cost.',
}

export default function ConsultationService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Consultation Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We assess your current tool stack and map where profitability visibility breaks down
        </p>
      </header>

      {/* Introduction */}
      <section className="prose prose-lg max-w-3xl mx-auto mb-16">
        <p>
          At CorporateHub, we understand that no two businesses are the same. Our consultation services are designed to help you navigate the complexities of Odoo and discover solutions that align with your unique needs. Whether you&apos;re looking to optimize workflows, integrate new tools, or solve specific challenges, we&apos;re here to guide you every step of the way.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why CorporateHub</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">You get the author, not a re-seller</h3>
              <p className="text-muted-foreground">
                24 OCA modules on Odoo 18.0, including the professional services timesheet suite. When something needs fixing, I write the code.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Deployed in weeks, not months</h3>
              <p className="text-muted-foreground">
                Configuration-first: 80% standard module configuration, 20% custom to your workflow. Typical timeline: 1&ndash;3 weeks for a 10&ndash;30 person agency.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Open-source, no lock-in</h3>
              <p className="text-muted-foreground">
                Every module is OCA-published and open-source licensed. If you outgrow CorporateHub, your system stays. Your data stays.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Business Process Analysis</h3>
            <p className="text-muted-foreground">
              We start by understanding your business inside and out. Our consultants analyze your current workflows, pinpoint inefficiencies, and identify opportunities for improvement.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Solution Design</h3>
            <p className="text-muted-foreground">
              Based on our findings, we propose tailored Odoo solutions that address your needs—from advanced configurations to custom module development.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Strategic Guidance</h3>
            <p className="text-muted-foreground">
              Navigating ERP implementation or optimization can be complex. We provide clear, actionable strategies to ensure your Odoo environment supports your business goals effectively.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Scalability Insights</h3>
            <p className="text-muted-foreground">
              Planning for growth? We&apos;ll help you build a scalable Odoo infrastructure that grows with your business, ensuring you&apos;re always ready for the next step.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Initial Consultation",
              description: "Discuss your goals and challenges with our experts. We&apos;ll identify key areas of focus and outline next steps."
            },
            {
              title: "In-Depth Assessment",
              description: "Our team conducts a detailed review of your processes, tools, and objectives to create a comprehensive action plan."
            },
            {
              title: "Customized Recommendations",
              description: "Receive a tailored roadmap with actionable recommendations for your Odoo implementation or optimization."
            },
            {
              title: "Ongoing Support",
              description: "We don&apos;t just deliver solutions—we stay with you to ensure successful adoption and continuous improvement."
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
          15-minute call to assess whether your current tools give you the project-level visibility you need.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Schedule Your Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

    </article>
  )
}

