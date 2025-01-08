import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Metadata } from 'next'
import Link from 'next/link'
import { commonStyles } from './styles/common'
import { generateStructuredData } from './utils/structuredData'

export const metadata: Metadata = {
  title: 'CorporateHub - Making business run smoother',
  description: 'CorporateHub offers consultation, training, tuning, data sync & migration, deployment, and support services for businesses using Odoo.',
}

export default function Home() {
  const structuredData = generateStructuredData({
    '@type': 'WebSite',
    name: 'CorporateHub - Making business run smoother',
    description: 'CorporateHub offers consultation, training, tuning, data sync & migration, deployment, and support services for businesses using Odoo.',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <section className="text-center mb-12 md:mb-16">
          <h1 className={`text-8xl md:text-7xl font-bold mb-4 ${commonStyles.headingLight} ${commonStyles.headingDark} mb-16 md:mb-12`}>Making business run smoother</h1>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${commonStyles.headingLight} ${commonStyles.headingDark} mb-24 md:mb-16`}>One step at a time</h1>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg">
              <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </section>

        <section className="mb-12 md:mb-16 py-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Consultation", description: "Strategic guidance for business optimization.", link: "/services/consultation" },
              { title: "Training", description: "Hands-on Odoo training tailored to teams.", link: "/services/training" },
              { title: "Tuning", description: "Tweaking Odoo to your business.", link: "/services/tuning" },
              { title: "Data Sync & Migration", description: "Integration with tools like HubSpot, Jira, and others.", link: "/services/data-sync-migration" },
              { title: "Deployment", description: "Smooth implementation of Odoo solutions.", link: "/services/deployment" },
              { title: "Support", description: "Ongoing assistance for your Odoo environment.", link: "/services/support" },
            ].map((service, index) => (
              <Link href={service.link} key={index} className="block group">
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md h-full transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:scale-105 group-hover:bg-gray-50 dark:group-hover:bg-gray-700">
                  <h3 className={`text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 group-hover:text-primary/90 dark:group-hover:text-primary-light/90 transition-colors duration-300`}>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center ${commonStyles.headingLight} ${commonStyles.headingDark}`}>Why Choose CorporateHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className={`text-xl font-semibold mb-3 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>One-Size-Doesn&apos;t-Fit-All Approach</h3>
                <p className={commonStyles.text}>
                  We understand that every business is unique. Our solutions are tailored to align perfectly with your specific workflows and business identity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className={`text-xl font-semibold mb-3 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>Focus on Tangible Results</h3>
                <p className={commonStyles.text}>
                  We prioritize delivering measurable improvements that drive real business value, ensuring every change contributes to your growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className={`text-xl font-semibold mb-3 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>Expertise You Can Trust</h3>
                <p className={commonStyles.text}>
                  With our deep knowledge of Odoo and integration processes, we provide reliable solutions that stand the test of time and scale with your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center rounded-lg p-6">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>Ready to optimize your business?</h2>
          <p className={`text-lg md:text-xl ${commonStyles.text} mb-6 md:mb-8`}>Let&apos;s discuss how CorporateHub can help streamline your operations.</p>
          <Button asChild size="lg">
            <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">Get Started</Link>
          </Button>
        </section>
      </div>
    </>
  )
}

