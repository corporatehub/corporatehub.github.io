import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart, CheckCircle, GitMerge, RefreshCw, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unifying Platforms: Synchronizing Jira and Odoo for Enhanced Project Collaboration - CorporateHub',
  description: 'Discover how CorporateHub integrated Jira and Odoo to streamline workflows and improve cross-department collaboration for a mid-sized software development firm.',
}

export default function JiraOdooIntegration() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Unifying Platforms: Synchronizing Jira and Odoo for Enhanced Project Collaboration
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground mb-4">
          A mid-sized software development firm faced persistent inefficiencies due to fragmented workflows across their project management tools. The engineering team relied heavily on Atlassian Jira for tracking sprints and tasks, while the operations and finance departments managed resources and budgets using Odoo. This lack of integration led to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-4">
          <li>Communication bottlenecks</li>
          <li>Manual data entry errors</li>
          <li>Misaligned project timelines</li>
          <li>Difficulty in obtaining real-time updates</li>
          <li>Delays and project mismanagement</li>
        </ul>
        <p className="text-lg text-muted-foreground">
          The firm sought a solution to unify these platforms, ensuring seamless data synchronization and enabling cross-departmental visibility.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub implemented a tailored Jira-Odoo synchronization solution. Leveraging our expertise in data sync and migration, we designed and deployed an integration that:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Real-Time Data Sync",
              description: "Ensured tasks, project updates, and status changes in Jira automatically reflected in Odoo&apos;s project and resource modules.",
              icon: RefreshCw
            },
            {
              title: "Custom Workflows",
              description: "Mapped specific Jira workflows to Odoo processes, allowing each department to retain their preferred tools while collaborating efficiently.",
              icon: GitMerge
            },
            {
              title: "Error Reduction",
              description: "Automated data transfer eliminated manual data entry, reducing errors and saving time.",
              icon: CheckCircle
            },
            {
              title: "Unified Reporting",
              description: "Enabled consolidated reporting for project progress, budget tracking, and resource allocation.",
              icon: BarChart
            }
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon && <feature.icon className="h-5 w-5 text-primary mr-2" />}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Implementation Process</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Consultation", description: "Worked closely with the client to understand their workflows, pain points, and integration goals." },
            { title: "Data Mapping", description: "Identified key data fields to synchronize, such as task status, assignees, due dates, and financial metrics." },
            { title: "Testing and Deployment", description: "Conducted rigorous testing to ensure data accuracy and synchronization reliability before rolling out the solution." },
            { title: "Training and Support", description: "Provided comprehensive training for end-users and ongoing technical support post-deployment." }
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
        <h2 className="text-2xl font-bold mb-4">The Results</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The integration transformed the firm&apos;s project management and collaboration landscape:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Improved Communication", description: "Cross-department teams now have access to real-time updates, fostering transparency and reducing delays.", icon: Users },
            { title: "Enhanced Productivity", description: "Automated data synchronization freed up hours previously spent on manual updates, enabling teams to focus on core tasks.", icon: Zap },
            { title: "Better Decision-Making", description: "Unified reporting tools provided stakeholders with actionable insights into project performance and resource utilization.", icon: BarChart },
            { title: "Scalability", description: "The solution's modular design supports future growth, allowing additional workflows and tools to be integrated seamlessly.", icon: GitMerge }
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
              &quot;CorporateHub&apos;s Jira-Odoo synchronization solution was a game-changer for our organization. The seamless integration not only streamlined our workflows but also improved our team&apos;s collaboration and efficiency. Their professionalism and expertise were evident at every step of the process.&quot;
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
        <p className="text-lg text-muted-foreground mb-4">
          This case study underscores the value of aligning tools like Jira and Odoo to bridge departmental gaps. By enabling real-time data flow and reducing redundancies, businesses can achieve greater efficiency and foster a culture of collaboration. CorporateHub&apos;s tailored approach ensures that solutions meet specific business needs, delivering tangible results with every integration.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Unify Your Project Management Tools?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Contact CorporateHub today to discover how our tailored integration solutions can streamline your workflows and enhance collaboration across your organization.
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

