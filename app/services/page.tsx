import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { generateStructuredData } from '../utils/structuredData'

export const metadata: Metadata = {
  title: 'Our Services - CorporateHub',
  description: 'CorporateHub deploys profitability and utilization visibility systems for IT services agencies. Consultation, training, tuning, migration, deployment, and support.',
}

const services = [
  {
    title: "Consultation",
    description: "We assess your current tool stack and map where profitability visibility breaks down. Outcome: a deployment plan with scope, timeline, and cost.",
    link: "/services/consultation"
  },
  {
    title: "Training",
    description: "Your team learns the system they will actually use \u2014 timesheet entry, project tracking, and the reports that show whether projects earn or lose.",
    link: "/services/training"
  },
  {
    title: "Tuning",
    description: "Your Odoo is running but not showing what matters. We configure timesheet workflows, approval chains, and project profitability reports to match how you actually work.",
    link: "/services/tuning"
  },
  {
    title: "Data Sync & Migration",
    description: "Your historical data from Harvest, Toggl, Xero, or Jira migrated into one system. No more exporting CSVs to build a profitability picture.",
    link: "/services/data-sync-migration"
  },
  {
    title: "Deployment",
    description: "Full deployment of the professional services module suite: time tracking, utilization, project profitability, and role-based costing. Typically 1\u20133 weeks for a 10\u201330 person agency.",
    link: "/services/deployment"
  },
  {
    title: "Support",
    description: "Post-deployment support for configuration changes, new modules, and version upgrades. We maintain the OCA modules your system runs on, so support comes from the source.",
    link: "/services/support"
  }
]

export default function ServicesPage() {
  const structuredData = generateStructuredData({
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `https://corporatehub.eu${service.link}`
      }
    }))
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We deploy profitability and utilization visibility systems for IT services agencies. Here is what that looks like.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  {service.title === "Consultation" && (
                    <Button asChild variant="outline">
                      <Link href="/case-studies" className="flex items-center">
                        See Our Work <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title === "Training" && (
                    <Button asChild variant="outline">
                      <Link href="/case-studies" className="flex items-center">
                        See Our Work <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title === "Tuning" && (
                    <Button asChild variant="outline">
                      <Link href="/services/tuning" className="flex items-center">
                        Learn More About Tuning <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title === "Data Sync & Migration" && (
                    <Button asChild variant="outline">
                      <Link href="/solutions/hubspot-odoo-sync-migration" className="flex items-center">
                        Discover the Integration <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title === "Deployment" && (
                    <Button asChild variant="outline">
                      <Link href="/case-studies" className="flex items-center">
                        See Our Work <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title === "Support" && (
                    <Button asChild variant="outline">
                      <Link href="/case-studies" className="flex items-center">
                        See Our Work <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title !== "Consultation" && service.title !== "Training" && service.title !== "Tuning" && service.title !== "Data Sync & Migration" && service.title !== "Deployment" && service.title !== "Support" && (
                    <Button asChild variant="outline">
                      <Link href={service.link} className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to see what this looks like for your agency?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            15-minute call to assess whether your current tools give you the project-level visibility you need.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>

      </div>
    </>
  )
}

