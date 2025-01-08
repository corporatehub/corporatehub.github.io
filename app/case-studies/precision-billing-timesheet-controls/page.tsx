import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart, Bell, CheckCircle, Clock, DollarSign } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Precision Billing for Projects: Granular Timesheet Controls - CorporateHub',
  description: 'Discover how CorporateHub improved revenue transparency for a professional services firm through advanced Odoo tuning of project and timesheet modules.',
}

export default function PrecisionBillingTimesheetControls() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Precision Billing for Projects: Granular Timesheet Controls That Improved Revenue Transparency
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
        <p className="text-lg text-muted-foreground mb-4">
          A mid-sized professional services firm specializing in IT consulting, known for delivering customized solutions to its clients. The firm faced challenges in maintaining financial transparency and accuracy due to limitations in their project and timesheet management processes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The client&apos;s existing Odoo setup lacked advanced controls for timesheet management and billing, which led to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-4">
          <li>Inconsistent tracking of billable and non-billable hours.</li>
          <li>Limited visibility into project-specific revenue streams.</li>
          <li>Errors in timesheet approval processes, causing delays in invoicing.</li>
          <li>Difficulty in producing accurate utilization and profitability reports.</li>
        </ul>
        <p className="text-lg text-muted-foreground">
          The firm needed a solution that would enable precise tracking, approval, and billing of timesheets while providing real-time insights into financial performance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub leveraged its expertise in Odoo tuning to address the client&apos;s needs. We focused on enhancing the project and timesheet modules by implementing the following solutions:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Granular Billing Control",
              items: [
                "Configured timesheet entries to categorize hours as billable, non-billable, or payable.",
                "Introduced automated billing rules tied to project roles and tasks, ensuring accurate invoicing."
              ],
              icon: DollarSign
            },
            {
              title: "Timesheet Approval Strategies",
              items: [
                "Developed a multi-tier approval workflow to validate timesheet accuracy before invoicing.",
                "Added customizable approval thresholds based on project budgets and timelines."
              ],
              icon: CheckCircle
            },
            {
              title: "Utilization Analysis and Reporting",
              items: [
                "Designed dashboards to monitor employee utilization rates and project profitability.",
                "Enabled real-time tracking of revenue contributions from individual projects and team members."
              ],
              icon: BarChart
            },
            {
              title: "Custom Notifications and Reminders",
              items: [
                "Implemented automated activity reminders to ensure timely timesheet submissions.",
                "Set up alerts for budget overruns or unbilled hours."
              ],
              icon: Bell
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
                <ul className="list-disc list-inside space-y-2">
                  {solution.items.map((item, itemIndex) => (
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Improved Accuracy", description: "The firm saw a 40% reduction in billing errors, leading to faster and more reliable invoicing.", icon: CheckCircle },
            { title: "Enhanced Transparency", description: "Real-time dashboards provided clear insights into project profitability and resource utilization.", icon: BarChart },
            { title: "Optimized Workflow", description: "Timesheet approval processes were streamlined, reducing administrative workload by 30%.", icon: Clock },
            { title: "Increased Revenue Recognition", description: "Better tracking and categorization of hours resulted in a 15% increase in billed revenue.", icon: DollarSign }
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
              &quot;CorporateHub&apos;s tailored tuning of our Odoo platform has been transformative. The granular billing controls and detailed reports have given us unprecedented clarity into our financials. It&apos;s a game-changer for our project management and overall business operations.&quot;
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Through precise tuning of Odoo&apos;s project and timesheet modules, CorporateHub enabled the client to achieve greater financial oversight, operational efficiency, and revenue transparency. This case underscores our commitment to delivering customized solutions that align with unique business needs.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your Project Billing?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Contact CorporateHub today to discover how our tailored Odoo solutions can enhance your financial transparency and operational efficiency.
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

