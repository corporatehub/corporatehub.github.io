import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart, BookOpen, CheckCircle, PhoneCall, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bridging the Skills Gap: Rapid Upskilling of a Retail Workforce - CorporateHub',
  description: 'Discover how CorporateHub\'s tailored training programs rapidly upskilled a retail workforce, improving efficiency and system adoption within six weeks.',
}

export default function RetailWorkforceUpskilling() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Bridging the Skills Gap: Rapid Upskilling of a Retail Workforce Using CorporateHub Training Programs
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <Card>
          <CardContent className="pt-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Client</dt>
                <dd className="mt-1 text-sm text-gray-900">A mid-sized retail chain operating across multiple states in the US</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Industry</dt>
                <dd className="mt-1 text-sm text-gray-900">Retail</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Challenge</dt>
                <dd className="mt-1 text-sm text-gray-900">Equipping non-technical staff with the skills to efficiently use the newly implemented Odoo ERP system</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Service</dt>
                <dd className="mt-1 text-sm text-gray-900">Tailored CorporateHub Training Programs</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Outcome</dt>
                <dd className="mt-1 text-sm text-gray-900">Significant improvement in workforce efficiency and system adoption within six weeks</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The client recently adopted Odoo to streamline their operations, from inventory management to customer relationship tracking. However, their workforce, primarily consisting of non-technical retail staff, struggled to navigate the new system. The resulting skills gap led to operational inefficiencies, delays, and resistance to change. The client needed a rapid, effective training solution tailored to their unique workforce profile.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub designed a customized training program focused on:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Tailored Content", description: "Training materials were simplified and aligned with the staff's day-to-day tasks, minimizing technical jargon and focusing on practical use cases.", icon: BookOpen },
            { title: "Interactive Learning", description: "Hands-on workshops and interactive exercises encouraged active participation and built confidence.", icon: Users },
            { title: "Phased Approach", description: "Training was structured into digestible modules, ensuring gradual yet steady skill acquisition.", icon: BarChart },
            { title: "Supportive Resources", description: "Quick-reference guides and on-demand video tutorials were provided to reinforce learning.", icon: BookOpen },
            { title: "Post-Training Support", description: "A dedicated helpline and regular check-ins ensured trainees could get help as they applied their new skills on the job.", icon: PhoneCall }
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
        <h2 className="text-2xl font-bold mb-4">Implementation</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Needs Assessment", description: "Conducted interviews with team leaders to identify pain points and prioritize training topics." },
            { title: "Content Development", description: "Created role-specific modules addressing tasks like inventory updates, sales reporting, and customer data entry." },
            { title: "Training Delivery", description: "Delivered in-person and virtual sessions over a six-week period, accommodating the diverse schedules of retail staff." },
            { title: "Knowledge Checks", description: "Incorporated quizzes and practice tasks to evaluate understanding and adjust the program dynamically." }
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
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Improved Efficiency", description: "Staff proficiency with Odoo improved by over 85%, significantly reducing task completion times.", icon: Zap },
            { title: "Enhanced Confidence", description: "Employees reported higher confidence in navigating the system, fostering a positive attitude towards the ERP adoption.", icon: Users },
            { title: "Business Impact", description: "Operational bottlenecks were eliminated, resulting in smoother workflows and improved customer satisfaction.", icon: BarChart },
            { title: "Long-Term Value", description: "The client&apos;s investment in tailored training translated to sustained productivity gains and reduced turnover related to system frustration.", icon: CheckCircle }
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
        <h2 className="text-2xl font-bold mb-4">Testimonial</h2>
        <Card>
          <CardContent className="pt-6">
            <blockquote className="text-lg text-muted-foreground italic">
              &quot;CorporateHub&apos;s training was a game-changer for us. Our staff quickly adapted to Odoo, and we saw immediate improvements in efficiency. The tailored approach made all the difference. We&apos;re thrilled with the results.&quot;
            </blockquote>
            <p className="mt-4 font-semibold">&mdash; Operations Manager, Retail Client</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s training programs demonstrate the value of a customized approach to workforce upskilling. By bridging the skills gap in a practical and engaging manner, we empowered the client&apos;s non-technical workforce to succeed in a technology-driven environment, ensuring the success of their ERP implementation.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Team&apos;s Skills?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Contact CorporateHub today and let&apos;s make your business run smoother – one step at a time.
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

