import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart, CheckCircle } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Empowering Teams: How Customized Odoo Training Increased Productivity by 40% - CorporateHub',
  description: 'Discover how CorporateHub\'s tailored Odoo training program boosted productivity by 40% for a mid-sized manufacturing company, improving collaboration and employee satisfaction.',
}

export default function ProductivityIncreaseTraining() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Empowering Teams: How Customized Odoo Training Increased Productivity by 40%
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground mb-4">
          When a mid-sized manufacturing company approached CorporateHub, they were struggling with underutilized Odoo capabilities. Their employees were using only a fraction of Odoo&apos;s features, leading to inefficiencies and a lack of alignment between departments. Moreover, the teams had diverse skill levels and varying familiarity with the platform, which hindered collaboration and slowed down day-to-day operations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s Training Service took a tailored approach, designing a custom training program that addressed the company&apos;s unique needs. Here&apos;s how we did it:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Needs Assessment", description: "We conducted a thorough analysis of the company&apos;s current Odoo usage and identified gaps in knowledge. Interviews with team leaders and department heads helped us understand specific pain points and workflow challenges." },
            { title: "Tailored Content", description: "Instead of generic modules, we crafted training sessions focused on real-world scenarios that mirrored the company&apos;s operations. For instance, sales teams practiced automating their lead tracking process, while accounting teams learned to utilize advanced reporting tools for financial analysis." },
            { title: "Hands-On Workshops", description: "Our interactive workshops allowed employees to practice in a sandbox environment, giving them confidence in applying their new skills without risking live data." },
            { title: "Role-Based Training", description: "Training was segmented by job roles, ensuring that each team received content relevant to their responsibilities. From project managers to warehouse staff, everyone learned how to maximize their efficiency within Odoo." },
            { title: "Follow-Up Support", description: "Post-training, we offered live Q&A sessions and created a library of quick-reference guides tailored to the company&apos;s workflows." }
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
        <h2 className="text-2xl font-bold mb-4">The Results</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Within three months of the training program:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Productivity Boost", description: "Teams reported a 40% increase in overall productivity. Tasks that previously took hours were now completed in minutes thanks to streamlined workflows.", icon: BarChart },
            { title: "Improved Collaboration", description: "Cross-departmental coordination improved significantly as employees gained a unified understanding of Odoo&apos;s features.", icon: CheckCircle },
            { title: "Higher Employee Satisfaction", description: "Team members appreciated the personalized approach, reporting increased confidence and satisfaction in their daily tasks.", icon: CheckCircle },
            { title: "Optimized Odoo Usage", description: "The company&apos;s Odoo adoption rate soared, with employees now leveraging over 85% of the platform's capabilities.", icon: BarChart }
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
              &quot;CorporateHub&apos;s training was a game-changer for us. The customized approach addressed our unique challenges, and the hands-on sessions made it easy for our teams to adopt new workflows. The boost in productivity has been incredible, and we finally feel like we&apos;re getting the most out of our Odoo investment.&quot;
            </blockquote>
            <p className="mt-4 font-semibold">– Operations Manager, Mid-Sized Manufacturing Company</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose CorporateHub for Training?</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s training service is designed to make your team&apos;s transition to Odoo seamless and impactful. By focusing on real-world applications and incremental improvements, we ensure that your employees don&apos;t just learn – they thrive. Let&apos;s make your business run smoother, one step at a time.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Empower Your Team?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Discover how CorporateHub&apos;s customized Odoo training can boost your team&apos;s productivity and streamline your operations.
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="inline-flex items-center">
            Schedule a Training Consultation
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

