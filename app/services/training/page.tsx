import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, FileText, Shield, UserPlus, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Training Services - CorporateHub',
  description: 'Empower your team with CorporateHub\'s customized Odoo training services. Our hands-on approach ensures your staff can maximize the potential of your Odoo platform.',
}

export default function TrainingService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Training for Odoo: Empower Your Team to Excel
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          At CorporateHub, we believe that software is only as good as the people using it. Our Odoo training services are tailored to equip your team with the skills and confidence they need to maximize the potential of your Odoo platform.
        </p>
      </header>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose CorporateHub for Odoo Training?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">One-size-doesn&apos;t-fit-all approach</h3>
              <p className="text-muted-foreground">
                We understand that every business is unique. Our training programs are designed to align with your specific workflows, ensuring that your team learns what matters most to your operations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Hands-on, practical learning</h3>
              <p className="text-muted-foreground">
                Forget generic tutorials. We focus on practical, real-world scenarios that your team encounters daily, making the training sessions relevant and immediately actionable.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Incremental results that matter</h3>
              <p className="text-muted-foreground">
                We prioritize tangible outcomes, breaking complex topics into manageable steps that help your team build their expertise progressively.
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
              description: "Proper training reduces mistakes, ensuring smoother operations."
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
        <h2 className="text-3xl font-bold mb-4">Ready to Empower Your Team?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let&apos;s make your Odoo experience seamless and impactful. Contact CorporateHub today to discuss your training needs and start making business run smoother—one step at a time.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Schedule Your Training Consultation
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

