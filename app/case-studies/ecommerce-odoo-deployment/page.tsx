import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart, Cog, Database, HeadphonesIcon, Package, Search, ShoppingCart, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'One-Size-Doesn\'t-Fit-All: A Step-by-Step Odoo Deployment for an E-Commerce Giant - CorporateHub',
  description: 'Discover how CorporateHub tailored an Odoo deployment for a major e-commerce company, addressing complex order management, inventory coordination, and customer service alignment.',
}

export default function EcommerceOdooDeployment() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          One-Size-Doesn&apos;t-Fit-All: A Step-by-Step Odoo Deployment Tailored for an E-Commerce Giant
        </h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Our client, an e-commerce giant operating across multiple regions, faced challenges scaling their operations due to fragmented systems and inefficiencies. Their goal was to unify their workflows under one robust ERP platform while preserving the unique elements of their operations that drove their competitive advantage.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Challenges</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Complex Order Management",
              description: "Managing high-volume orders with varying customizations across different regions required a system that could adapt to their multi-layered workflows.",
              icon: ShoppingCart
            },
            {
              title: "Inventory Coordination",
              description: "Multiple warehouses with diverse inventory strategies needed synchronization to prevent stockouts and overstocking.",
              icon: Package
            },
            {
              title: "Customer Service Alignment",
              description: "Ensuring seamless communication between support teams and order processing was critical for maintaining their service standards.",
              icon: HeadphonesIcon
            },
            {
              title: "Scalable Infrastructure",
              description: "A system flexible enough to grow with their business was non-negotiable.",
              icon: BarChart
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
        <h2 className="text-2xl font-bold mb-4">Our Approach: A Bespoke Deployment Strategy</h2>
        <p className="text-lg text-muted-foreground mb-4">
          CorporateHub&apos;s philosophy &mdash; &quot;one-size-doesn&apos;t-fit-all&quot; &mdash; guided every step of the project. We tailored the Odoo deployment to align with the client&apos;s unique needs, focusing on incremental, tangible outcomes.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Discovery and Planning",
              description: "We began with a detailed consultation phase to understand their pain points and priorities. Through workshops with cross-functional teams, we identified key operational bottlenecks, specific regional compliance requirements, and unique workflows essential to their business identity.",
              icon: Search
            },
            {
              title: "Custom Configuration and Tuning",
              description: "To meet the client&apos;s distinct needs, we developed custom Odoo modules, including advanced order management, inventory optimization, and enhanced customer service tools.",
              icon: Cog
            },
            {
              title: "Data Migration and Sync",
              description: "We consolidated data from multiple sources while preserving historical accuracy and established bi-directional synchronization between Odoo and existing tools.",
              icon: Database
            },
            {
              title: "Iterative Deployment and Training",
              description: "The deployment was rolled out in manageable phases, focusing initially on order management and inventory, with subsequent phases integrating customer service and advanced analytics.",
              icon: Zap
            },
            {
              title: "Continuous Support and Optimization",
              description: "Post-deployment, our support team worked closely with the client to fine-tune performance and address emerging needs. Quarterly reviews ensured the system evolved with their business.",
              icon: Users
            }
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {step.icon && <step.icon className="h-5 w-5 text-primary mr-2" />}
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
            { title: "Streamlined Operations", description: "Order processing time reduced by 35%, with significant improvements in accuracy and efficiency." },
            { title: "Optimized Inventory", description: "Stock discrepancies dropped by 50%, and replenishment cycles became more predictable." },
            { title: "Enhanced Customer Satisfaction", description: "Faster order resolutions and real-time updates boosted their Net Promoter Score (NPS) by 12 points." },
            { title: "Scalability Achieved", description: "The client now has a flexible ERP system that can adapt to future growth and innovation." }
          ].map((result, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{result.title}</CardTitle>
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
          This deployment showcased CorporateHub&apos;s ability to tailor Odoo to unique business requirements, proving that one-size doesn&apos;t fit all. By focusing on incremental improvements and tangible results, we empowered the client to achieve operational excellence without compromising their identity.
        </p>
      </section>

      <section className="text-center bg-muted rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Let&apos;s take the first step together. Contact CorporateHub today for a customized Odoo deployment that fits your unique business needs.
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

