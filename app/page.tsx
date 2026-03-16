import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Metadata } from 'next'
import Link from 'next/link'
import { commonStyles } from './styles/common'
import { generateStructuredData } from './utils/structuredData'

export const metadata: Metadata = {
  title: 'CorporateHub \u2014 Your profitability, visible.',
  description: 'Odoo consulting partner specializing in profitability and utilization visibility for IT services agencies. Built by an OCA maintainer with 24 modules on Odoo 18.0.',
}

export default function Home() {
  const structuredData = generateStructuredData({
    '@type': 'WebSite',
    name: 'CorporateHub \u2014 Your profitability, visible.',
    description: 'Odoo consulting partner specializing in profitability and utilization visibility for IT services agencies. Built by an OCA maintainer with 24 modules on Odoo 18.0.',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <section className="text-center mb-12 md:mb-16">
          <h1 className={`text-8xl md:text-7xl font-bold mb-4 ${commonStyles.headingLight} ${commonStyles.headingDark} mb-16 md:mb-12`}>Your profitability, visible.</h1>
          <p className={`text-xl md:text-2xl ${commonStyles.text} mb-24 md:mb-16`}>Integrated time tracking, utilization, and project profitability for services firms.</p>
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
              { title: "Consultation", description: "We assess your current tool stack and map where profitability visibility breaks down.", link: "/services/consultation" },
              { title: "Training", description: "Your team learns the system they will actually use \u2014 timesheet entry, project tracking, and the reports that matter.", link: "/services/training" },
              { title: "Tuning", description: "We configure timesheet workflows, approval chains, and project profitability reports to match how you actually work.", link: "/services/tuning" },
              { title: "Data Sync & Migration", description: "Your historical data from Harvest, Toggl, Xero, or Jira migrated into one system.", link: "/services/data-sync-migration" },
              { title: "Deployment", description: "Full deployment of the professional services module suite. Typically 1\u20133 weeks for a 10\u201330 person agency.", link: "/services/deployment" },
              { title: "Support", description: "Post-deployment support from the source \u2014 we maintain the OCA modules your system runs on.", link: "/services/support" },
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
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center ${commonStyles.headingLight} ${commonStyles.headingDark}`}>Why CorporateHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className={`text-xl font-semibold mb-3 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>You get the author, not a re-seller</h3>
                <p className={commonStyles.text}>
                  24 OCA modules on Odoo 18.0, including the professional services timesheet suite. When something needs fixing, I write the code.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className={`text-xl font-semibold mb-3 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>Deployed in weeks, not months</h3>
                <p className={commonStyles.text}>
                  Configuration-first: 80% standard module configuration, 20% custom to your workflow. Typical timeline: 1&ndash;3 weeks for a 10&ndash;30 person agency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className={`text-xl font-semibold mb-3 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>Open-source, no lock-in</h3>
                <p className={commonStyles.text}>
                  Every module is OCA-published and open-source licensed. If you outgrow CorporateHub, your system stays. Your data stays.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center rounded-lg p-6">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${commonStyles.headingLight} ${commonStyles.headingDark}`}>See what profitability visibility looks like</h2>
          <p className={`text-lg md:text-xl ${commonStyles.text} mb-6 md:mb-8`}>15-minute call to assess whether your current tools give you the project-level visibility you need.</p>
          <Button asChild size="lg">
            <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">Get Started</Link>
          </Button>
        </section>
      </div>
    </>
  )
}

