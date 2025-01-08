import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consultation Services - CorporateHub',
  description: 'Unlock your business potential with CorporateHub\'s tailored Odoo consultation services. We provide strategic guidance for optimizing your operations and achieving tangible results.',
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
          Unlock Your Business Potential with Tailored Odoo Expertise
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
        <h2 className="text-3xl font-bold mb-8">Why Choose CorporateHub?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">One-Size-Doesn&apos;t-Fit-All Approach</h3>
              <p className="text-muted-foreground">
                Your business processes are as unique as your business identity. We don&apos;t believe in cookie-cutter solutions. Instead, we dive deep into your operations to provide personalized recommendations that drive real, measurable results.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Tangible, Incremental Improvements</h3>
              <p className="text-muted-foreground">
                Change doesn&apos;t have to be overwhelming. Our team focuses on practical, step-by-step enhancements that empower your business without disrupting day-to-day operations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
              <p className="text-muted-foreground">
                With years of experience in Odoo customization, migration, and integration, we bring a wealth of knowledge to the table. You&apos;ll benefit from expert insights tailored to your specific industry and challenges.
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

      {/* Success Stories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  &quot;CorporateHub helped us streamline our operations and integrate Odoo seamlessly with our existing tools. Their personalized approach and clear recommendations were game-changers for our business.&quot;
                </p>
                <footer className="text-sm font-semibold">
                  &mdash; Sarah T., Operations Manager
                </footer>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  &quot;The team at CorporateHub took the time to understand our unique challenges and provided solutions that really worked. Their consultation was invaluable.&quot;
                </p>
                <footer className="text-sm font-semibold">
                  &mdash; James L., CEO
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Get Started</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ready to make your business run smoother? Contact CorporateHub today for a free initial consultation. Let&apos;s explore how Odoo can be tuned to meet your needs and unlock your full potential.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Schedule Your Free Consultation
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

