import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart, CheckCircle, Clock, DollarSign, Globe, Users } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Optimizing HR with Odoo: Advanced Time-Off Management for a Multinational Firm - CorporateHub',
  description: 'Discover how CorporateHub customized Odoo to streamline HR processes, manage complex time-off accruals, and handle multi-currency contracts for a multinational firm.',
}

export default function HROptimizationMultinationalFirm() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Optimizing HR with Odoo: Advanced Time-Off Management for a Multinational Firm
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-muted-foreground mb-4">
          A rapidly growing multinational firm approached CorporateHub to streamline its HR processes using Odoo. With a workforce spread across multiple countries, the company faced challenges in managing time-off accruals and multi-currency contracts. CorporateHub&apos;s tailored tuning services provided a solution that significantly improved efficiency and employee satisfaction.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Client Challenges</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The firm struggled with the following HR issues:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Complex Time-Off Accruals", description: "Each country's labor laws dictated unique time-off policies, making standardization impossible.", icon: Globe },
            { title: "Manual Multi-Currency Adjustments", description: "Managing payroll and contracts in multiple currencies required excessive manual intervention, increasing the risk of errors.", icon: DollarSign },
            { title: "Scattered Systems", description: "HR teams relied on spreadsheets and disconnected systems that lacked visibility and synchronization.", icon: BarChart }
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
        <h2 className="text-2xl font-bold mb-4">CorporateHub&apos;s Solution</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Leveraging Odoo&apos;s flexibility, CorporateHub customized the HR module to address the client&apos;s unique needs:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Advanced Accrual Time-Off Management",
              items: [
                "Implemented a rules engine to automate time-off accruals based on country-specific regulations and employee tenure.",
                "Designed a dashboard providing real-time visibility into time-off balances for both employees and managers.",
                "Introduced approval workflows to streamline the request process and maintain compliance."
              ],
              icon: Clock
            },
            {
              title: "Multi-Currency Contract Management",
              items: [
                "Added a feature to calculate and manage salaries, bonuses, and other contract terms in the employee's local currency.",
                "Integrated exchange rate providers to ensure accurate, up-to-date currency conversions.",
                "Enabled automated adjustments for fluctuations in exchange rates, simplifying payroll."
              ],
              icon: DollarSign
            },
            {
              title: "Enhanced Reporting and Compliance",
              items: [
                "Created customized reports to provide insights into time-off utilization and payroll trends.",
                "Ensured compliance with local laws by embedding audit trails and configurable rule sets."
              ],
              icon: BarChart
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
        <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub followed a structured approach to ensure a smooth deployment:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Consultation", description: "Collaborated with HR stakeholders to identify pain points and define requirements." },
            { title: "Configuration & Tuning", description: "Customized the Odoo HR module with advanced accrual logic and multi-currency handling capabilities." },
            { title: "Training", description: "Conducted tailored training sessions for HR teams, enabling seamless adoption of the new tools." },
            { title: "Support", description: "Provided ongoing support to refine configurations and address emerging needs." }
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
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
        <h2 className="text-2xl font-bold mb-4">Results Achieved</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Efficiency Gains", description: "Reduced manual HR tasks by 65%, allowing the HR team to focus on strategic initiatives.", icon: BarChart },
            { title: "Improved Employee Experience", description: "Employees gained transparency into their time-off balances, and requests were processed 40% faster.", icon: Users },
            { title: "Error Reduction", description: "Automated currency conversions and time-off calculations eliminated common payroll and compliance errors.", icon: CheckCircle },
            { title: "Global Alignment", description: "The centralized system offered a unified view of HR data across all locations.", icon: Globe }
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
        <h2 className="text-2xl font-bold mb-4">Client Feedback</h2>
        <Card>
          <CardContent className="pt-6">
            <blockquote className="text-lg text-muted-foreground italic">
              &quot;CorporateHub&apos;s expertise in Odoo has transformed our HR operations. The tailored solutions for time-off management and multi-currency contracts have simplified our processes and elevated employee satisfaction. We couldn&apos;t be more pleased with the results.&quot;
            </blockquote>
            <p className="mt-4 font-semibold">— HR Director, Multinational Firm</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg text-muted-foreground mb-4">
          This case exemplifies CorporateHub&apos;s commitment to delivering one-size-doesn&apos;t-fit-all solutions. By understanding the nuances of the client&apos;s business, we optimized their HR operations and reinforced their ability to scale globally with confidence.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your HR Processes?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Contact CorporateHub today and make your business run smoother — one step at a time.
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

