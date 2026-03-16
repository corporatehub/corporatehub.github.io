import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, FileText, Shield, UserPlus, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Training Services - CorporateHub',
  description: 'Your team learns the system they will actually use \u2014 timesheet entry, project tracking, and the reports that show whether projects earn or lose.',
}

export default function TrainingService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Training Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your team learns the system they will actually use &mdash; timesheet entry, project tracking, and the reports that show whether projects earn or lose.
        </p>
      </header>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why CorporateHub for Training</h2>
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

      {/* Our Training Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Training Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Role-Specific Training",
              description: "Whether it&apos;s HR, accounting, project management, or timesheet administration, we provide focused training to ensure each department excels in their respective areas."
            },
            {
              icon: UserPlus,
              title: "User Onboarding",
              description: "Get your new hires up to speed quickly with tailored onboarding sessions that familiarize them with Odoo&apos;s functionalities and best practices."
            },
            {
              icon: Zap,
              title: "Advanced User Training",
              description: "For teams ready to dive deeper, we offer advanced sessions covering in-depth features like accrual management, granular billing control, and utilization analysis."
            },
            {
              icon: Shield,
              title: "Administrator Training",
              description: "Empower your administrators with the knowledge they need to configure, customize, and maintain Odoo for your business&apos;s unique needs."
            },
            {
              icon: FileText,
              title: "Customized Training Resources",
              description: "From step-by-step guides to live demos and recorded sessions, we provide training materials your team can reference anytime."
            }
          ].map((service, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Training Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Training Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Assessment of Needs",
              description: "We start by understanding your team&apos;s skill level, challenges, and goals to create a tailored training plan."
            },
            {
              title: "Interactive Training Sessions",
              description: "Hands-on workshops and interactive sessions ensure your team can immediately apply what they learn."
            },
            {
              title: "Post-Training Support",
              description: "We provide ongoing support to address follow-up questions and refine your team&apos;s skills as they gain more experience."
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

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Results You Can Count On</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Boost Productivity",
              description: "Your team will work faster and more efficiently with a solid understanding of Odoo."
            },
            {
              title: "Minimize Errors",
              description: "Proper training reduces mistakes and keeps your data accurate from day one."
            },
            {
              title: "Enhance ROI",
              description: "Maximize the value of your Odoo investment by making full use of its capabilities."
            }
          ].map((result, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{result.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">See What This Looks Like for Your Team</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          15-minute call to assess whether your current tools give you the project-level visibility you need.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Schedule Your Training Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

    </article>
  )
}

