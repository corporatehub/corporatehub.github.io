import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { generateStructuredData } from '../utils/structuredData'

export const metadata: Metadata = {
  title: 'Our Services - CorporateHub',
  description: 'Discover CorporateHub\'s comprehensive Odoo services including consultation, training, tuning, data sync & migration, deployment, and support. We help optimize your business operations with tailored solutions.',
}

const services = [
  {
    title: "Consultation",
    description: "Discover how our consultation services helped a manufacturing business optimize its ERP system for smoother operations.",
    link: "/case-studies/manufacturing-erp-optimization"
  },
  {
    title: "Training",
    description: "Learn how our training programs empowered a retail team to boost productivity and upskill effectively.",
    link: "/case-studies/retail-workforce-upskilling"
  },
  {
    title: "Tuning",
    description: "See how our tuning services enabled precise billing solutions tailored for project-based businesses.",
    link: "/services/tuning"
  },
  {
    title: "Data Sync & Migration",
    description: "Explore how we seamlessly connected HubSpot and Odoo to enhance data flow and efficiency.",
    link: "/solutions/hubspot-odoo-sync-migration"
  },
  {
    title: "Deployment",
    description: "Find out how our deployment services supported a successful Odoo launch for an e-commerce business.",
    link: "/case-studies/ecommerce-odoo-deployment"
  },
  {
    title: "Support",
    description: "Learn how ongoing support services helped a business tackle ERP challenges before they became issues.",
    link: "/case-studies/proactive-support-erp-challenges"
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
        url: `https://corporatehub.com${service.link}`
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
            Discover how CorporateHub can optimize your business operations with our comprehensive Odoo services.
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
                      <Link href="/case-studies/manufacturing-erp-optimization" className="flex items-center">
                        Learn How We Did It <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title === "Training" && (
                    <Button asChild variant="outline">
                      <Link href="/case-studies/retail-workforce-upskilling" className="flex items-center">
                        Explore Training Success <ArrowRight className="ml-2 h-4 w-4" />
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
                      <Link href="/case-studies/ecommerce-odoo-deployment" className="flex items-center">
                        See the Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {service.title === "Support" && (
                    <Button asChild variant="outline">
                      <Link href="/case-studies/proactive-support-erp-challenges" className="flex items-center">
                        Learn More About Our Support <ArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Customized Solution?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            We specialize in tailoring our services to meet your unique business needs. Let&apos;s discuss how we can optimize your Odoo experience.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>

        <footer className="text-center mt-16">
          <p className="text-lg font-semibold text-primary">
            CorporateHub – Making Business Run Smoother, One Step at a Time
          </p>
        </footer>
      </div>
    </>
  )
}

