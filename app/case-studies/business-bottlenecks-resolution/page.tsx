import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'From Frustration to Clarity: Addressing Business Bottlenecks - CorporateHub',
  description: 'Discover how CorporateHub\'s expert consultation resolved key operational inefficiencies for a mid-sized manufacturing company, leading to significant improvements in productivity and decision-making.',
}

export default function BusinessBottlenecksResolution() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          From Frustration to Clarity: Addressing Key Business Bottlenecks with CorporateHub&apos;s Expert Consultation
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-muted-foreground mb-4">
          A mid-sized manufacturing company faced persistent operational inefficiencies that
          hindered growth and frustrated its leadership team. Despite implementing various tools, the company struggled with disconnected systems, unclear workflows, and underutilized resources. Seeking a fresh perspective and actionable solutions, they turned to CorporateHub for expert consultation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Challenges</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The company faced several critical pain points:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Disjointed Systems", description: "Their CRM, project management, and accounting tools operated in silos, causing data duplication and delays." },
            { title: "Inefficient Workflows", description: "Key processes such as order management and resource allocation lacked clarity and standardization." },
            { title: "Underutilized Resources", description: "Employees spent excessive time on manual tasks, leaving little room for strategic activities." },
            { title: "Limited Reporting Capabilities", description: "Decision-making was hampered by inconsistent and incomplete data insights." }
          ].map((challenge, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <XCircle className="h-5 w-5 text-destructive mr-2" />
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
        <h2 className="text-2xl font-bold mb-4">CorporateHub&apos;s Approach</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s consultation team began with a comprehensive assessment, involving:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-4">
          <li><strong>Stakeholder Interviews</strong>: To understand the challenges from multiple perspectives, including leadership, operations, and IT.</li>
          <li><strong>Process Mapping</strong>: A detailed analysis of workflows to identify bottlenecks and redundancies.</li>
          <li><strong>System Audit</strong>: Reviewing existing tools and integrations to pinpoint gaps and inefficiencies.</li>
          <li><strong>Goal Alignment Workshop</strong>: Ensuring proposed solutions aligned with the company&apos;s strategic objectives.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Tailored Solutions</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Based on the findings, CorporateHub developed a phased roadmap:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Integrated Systems",
              items: [
                "Recommended and implemented Odoo as a unified platform.",
                "Configured seamless data synchronization between CRM, project management, and accounting tools."
              ]
            },
            {
              title: "Optimized Workflows",
              items: [
                "Streamlined order management with automated approval processes.",
                "Introduced clear resource allocation protocols tied to project timelines and budgets."
              ]
            },
            {
              title: "Employee Empowerment",
              items: [
                "Conducted targeted training sessions to maximize adoption of new tools.",
                "Reduced manual tasks by introducing automated data entry and reporting features."
              ]
            },
            {
              title: "Enhanced Reporting",
              items: [
                "Designed custom dashboards for real-time insights into key performance indicators (KPIs).",
                "Established centralized data repositories to ensure consistency and accuracy."
              ]
            }
          ].map((solution, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Within six months of implementation, the company achieved significant improvements:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "30% Reduction in Process Delays", description: "Automated workflows eliminated redundant steps and sped up approvals." },
            { title: "20% Increase in Employee Productivity", description: "Employees could focus on higher-value tasks with the help of integrated systems and automation." },
            { title: "Improved Decision-Making", description: "Leadership gained actionable insights through accurate, real-time reporting." },
            { title: "Enhanced Collaboration", description: "Unified tools fostered better communication and coordination across departments." }
          ].map((result, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
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
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s expert consultation transformed frustration into clarity for this manufacturing company. By addressing their specific pain points with tailored solutions, the company unlocked new levels of efficiency and strategic focus. CorporateHub continues to provide ongoing support to ensure sustained success as their needs evolve.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Address Your Business Bottlenecks?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Contact CorporateHub today to explore how our tailored consultation services can make your business run smoother—one step at a time.
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="inline-flex items-center">
            Schedule a Consultation
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

