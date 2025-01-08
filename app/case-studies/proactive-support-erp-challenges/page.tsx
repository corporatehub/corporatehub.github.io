import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Search, Shield, Sliders, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'From Good to Great: How CorporateHub\'s Proactive Support Resolved Hidden ERP Challenges - CorporateHub',
  description: 'Discover how CorporateHub\'s proactive support uncovered and resolved hidden inefficiencies in a manufacturing company\'s Odoo ERP system, leading to significant improvements in reporting speed, data accuracy, and user confidence.',
}

export default function ProactiveSupportERPChallenges() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          From Good to Great: How CorporateHub&apos;s Proactive Support Resolved Hidden ERP Challenges
        </h1>
      </header>

      <section className="mb-12">
        <p className="text-lg text-muted-foreground mb-4">
          When a mid-sized manufacturing company implemented Odoo as their ERP system, they anticipated streamlined operations and enhanced efficiency. While the initial deployment brought visible improvements, subtle inefficiencies remained unnoticed until CorporateHub&apos;s proactive support stepped in to elevate their system from good to great.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge: Unseen Gaps in a New ERP System</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Post-deployment, the client&apos;s operations appeared to be running smoothly on the surface. However, the company began noticing sporadic delays in reporting, inconsistencies in inventory data, and unexplained discrepancies in financial reconciliations. These issues, though not disruptive at first glance, hinted at underlying inefficiencies that could compound over time.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          The company&apos;s IT team struggled to pinpoint the root causes. They needed a partner who could go beyond standard support—someone who could proactively analyze their system and address the hidden challenges threatening their productivity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">CorporateHub&apos;s Solution: A Deep Dive with Proactive Support</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s support team took a comprehensive, hands-on approach to uncovering the inefficiencies. Here&apos;s how:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Comprehensive System Audit",
              description: "Conducted a meticulous audit of the ERP configuration, workflows, and data structures. Identified workflow bottlenecks, data synchronization lags, and misconfigured user roles.",
              icon: Search
            },
            {
              title: "Customized Adjustments",
              description: "Tailored solutions to address pain points, including streamlined inventory tracking, enhanced synchronization rules, and refined user role configurations.",
              icon: Sliders
            },
            {
              title: "Proactive Monitoring Tools",
              description: "Introduced advanced monitoring tools for early detection of anomalies, including dashboards and automated alerts.",
              icon: Shield
            },
            {
              title: "Training and Knowledge Sharing",
              description: "Provided targeted training sessions for the client&apos;s staff, empowering them to identify and resolve minor issues independently.",
              icon: BookOpen
            }
          ].map((solution, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {solution.icon && <solution.icon className="h-5 w-5 text-primary mr-2" />}
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Results: Tangible Improvements and Long-Term Impact</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Within three months of CorporateHub&apos;s intervention, the client&apos;s ERP system showed remarkable improvements:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "40% Faster Reporting", description: "Streamlined workflows eliminated delays in generating reports, enabling faster decision-making.", icon: Zap },
            { title: "99% Data Accuracy", description: "Addressing synchronization lags resolved discrepancies, ensuring reliable inventory and financial data.", icon: CheckCircle },
            { title: "Enhanced User Confidence", description: "Improved configurations and training boosted user adoption and satisfaction.", icon: Users }
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
        <p className="text-lg text-muted-foreground mt-6">
          More importantly, the company avoided potential losses and operational disruptions, ensuring their ERP investment delivered its full potential.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why CorporateHub?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              CorporateHub&apos;s proactive support philosophy stems from our belief that one-size-doesn&apos;t-fit-all. By focusing on the subtle details and embracing a continuous improvement mindset, we help businesses not just deploy their ERP systems but optimize them for sustained success. For this client, it meant turning an already functional ERP into a seamless, reliable backbone of their operations.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your ERP System?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Hidden inefficiencies can quietly undermine your ERP&apos;s performance. Let CorporateHub&apos;s support team help you uncover and resolve them, one step at a time.
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

