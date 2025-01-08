import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart, CheckCircle, Clock, DollarSign, RefreshCw, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tempo Timesheets Meets Odoo: Unlocking Advanced Time Tracking and Reporting - CorporateHub',
  description: 'Discover how CorporateHub integrated Tempo Timesheets with Odoo to streamline time tracking, reporting, and billing processes for a project management consultancy.',
}

export default function TempoTimesheetsOdooSync() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Tempo Timesheets Meets Odoo: Unlocking Advanced Time Tracking and Reporting
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Our client, a mid-sized project management consultancy, struggled with fragmented time tracking and reporting processes. They relied on Tempo Timesheets for detailed time tracking and Atlassian Jira for project management. However, their accounting and invoicing processes operated in Odoo, creating inefficiencies and data silos.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The client faced several key challenges:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Manual Data Entry",
              description: "Time tracking data from Tempo Timesheets had to be manually exported and imported into Odoo for billing and payroll, increasing the risk of errors and delays.",
              icon: Clock
            },
            {
              title: "Lack of Real-Time Insights",
              description: "Disconnected systems meant managers couldn&apos;t get a real-time view of project time allocation and financial performance.",
              icon: BarChart
            },
            {
              title: "Inefficient Reporting",
              description: "Generating consolidated reports for time tracking, project profitability, and resource utilization was a time-consuming process.",
              icon: RefreshCw
            }
          ].map((challenge, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {challenge.icon && <challenge.icon className="h-5 w-5 text-primary mr-2" />}
                  {challenge.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub deployed a customized sync solution to integrate Tempo Timesheets with Odoo, ensuring seamless data flow between the two systems. The integration included:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Automated Time Data Sync",
              description: "Real-time synchronization of time entries from Tempo Timesheets into Odoo&apos;s timesheet and project modules.",
              icon: RefreshCw
            },
            {
              title: "Enhanced Reporting Tools",
              description: "Unified reporting capabilities to track resource utilization, billable hours, and project profitability within Odoo.",
              icon: BarChart
            },
            {
              title: "Custom Mapping",
              description: "Mapping Tempo Timesheets&apos; granular time-tracking data to Odoo&apos;s project structures and accounting workflows for accurate billing and payroll.",
              icon: Zap
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
        <h2 className="text-2xl font-bold mb-4">Implementation Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Requirement Analysis", description: "Worked closely with the client&apos;s teams to identify key data points and workflows." },
            { title: "Custom Integration", description: "Developed a two-way sync connector that ensured data consistency and compatibility." },
            { title: "Testing & Validation", description: "Conducted rigorous testing to validate the accuracy of time tracking data and its alignment with project and accounting modules." },
            { title: "Training", description: "Provided hands-on training to ensure smooth adoption by the client&apos;s teams." }
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "50% Reduction in Administrative Workload", description: "Eliminated manual data transfers, saving significant time for the operations team.", icon: Clock },
            { title: "Real-Time Insights", description: "Managers gained instant visibility into time allocation and project budgets, enabling quicker decision-making.", icon: BarChart },
            { title: "Streamlined Billing", description: "Accurate and automated transfer of time tracking data led to faster invoicing cycles and improved cash flow.", icon: DollarSign },
            { title: "Improved Accuracy", description: "Reduced errors in payroll and billing processes, enhancing trust and transparency.", icon: CheckCircle }
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
              &quot;The integration between Tempo Timesheets and Odoo has transformed our operations. We now have real-time access to the data we need, without the hassle of manual entry or reconciliation. CorporateHub delivered exactly what we needed—a seamless solution that saves us time and boosts our efficiency.&quot;
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg text-muted-foreground mb-4">
          By connecting Tempo Timesheets with Odoo, CorporateHub empowered the client to overcome their operational inefficiencies and unlock the full potential of their time tracking and reporting. This case study exemplifies our commitment to delivering tailored solutions that make business run smoother—one step at a time.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Streamline Your Time Tracking and Reporting?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Contact CorporateHub today to discover how our tailored integration solutions can optimize your workflows and boost your operational efficiency.
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

