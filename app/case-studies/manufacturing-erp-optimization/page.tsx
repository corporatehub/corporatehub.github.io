import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Streamlining Business Operations: Manufacturing ERP Optimization - CorporateHub',
  description: 'Discover how CorporateHub transformed a manufacturing company\'s ERP system through tailored consultations, resulting in increased efficiency and improved accuracy.',
}

export default function ManufacturingERPOptimization() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Streamlining Business Operations: How Tailored Consultations Transformed a Manufacturing Company&apos;s ERP System
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground mb-4">
          A mid-sized manufacturing company faced significant hurdles with its existing ERP system. The rigid, off-the-shelf solution lacked flexibility to handle the unique workflows, complex inventory management, and multi-location operations integral to their business. Misaligned features led to inefficiencies, frustrated employees, and stagnant growth.
        </p>
        <p className="text-lg text-muted-foreground">
          The company sought a partner who could align their ERP system with their business&apos;s distinctive needs, without disrupting day-to-day operations. That&apos;s where CorporateHub came in.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s consulting team approached the project with a step-by-step strategy, ensuring a smooth transition and tangible improvements:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Discovery and Analysis",
              items: [
                "Conducted in-depth workshops with stakeholders to map existing workflows and identify pain points.",
                "Analyzed operational data to understand bottlenecks and inefficiencies.",
                "Documented key business processes requiring customization."
              ]
            },
            {
              title: "Strategic Planning",
              items: [
                "Defined clear objectives, such as optimizing inventory tracking, enhancing inter-location coordination, and improving production scheduling.",
                "Created a phased roadmap for Odoo customization and deployment to minimize disruption."
              ]
            },
            {
              title: "Customizing Odoo",
              items: [
                "Tailored the manufacturing module to support unique production workflows and custom inventory classifications.",
                "Introduced role-specific dashboards for real-time operational insights.",
                "Enhanced multi-location functionality for seamless coordination between facilities."
              ]
            },
            {
              title: "Training and Change Management",
              items: [
                "Delivered hands-on training sessions for employees to ensure adoption of the new system.",
                "Provided process documentation and support materials tailored to user roles."
              ]
            },
            {
              title: "Iterative Implementation",
              items: [
                "Deployed the customized system in stages, starting with non-critical functions to build user confidence.",
                "Collected user feedback at each phase to fine-tune features before full-scale implementation."
              ]
            },
            {
              title: "Ongoing Support",
              items: [
                "Established a dedicated support channel for troubleshooting and further refinements.",
                "Offered continuous performance monitoring to ensure long-term success."
              ]
            }
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2">
                  {step.items.map((item, itemIndex) => (
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
        <h2 className="text-2xl font-bold mb-4">The Results</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The tailored consultation and step-by-step execution led to transformational results:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-4">
          <li><strong>Increased Efficiency</strong>: Optimized workflows reduced production delays by 30%.</li>
          <li><strong>Improved Accuracy</strong>: Enhanced inventory tracking minimized errors by 40%.</li>
          <li><strong>Employee Satisfaction</strong>: User-friendly interfaces and role-specific tools increased productivity and employee morale.</li>
          <li><strong>Scalable System</strong>: The customized ERP system can now scale with the company&apos;s growth, supporting additional facilities and product lines.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why CorporateHub?</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s commitment to the &quot;one-size-doesn&apos;t-fit-all&quot; ideology ensured a tailored solution that aligned perfectly with the client&apos;s business identity. By focusing on incremental, tangible results, CorporateHub demonstrated how personalized consultation can turn a rigid ERP system into a powerful enabler of growth.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Let CorporateHub help your business run smoother—one step at a time. Contact us today to transform your ERP system.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
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

