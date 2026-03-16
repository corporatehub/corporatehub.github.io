import { Button } from "@/components/ui/button"
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About CorporateHub',
  description: 'Odoo consulting partner specializing in profitability and utilization visibility for IT services agencies. Founded by an OCA maintainer.',
}

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About CorporateHub</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">The Problem We Solve</h2>
        <p className="text-lg text-gray-600 mb-4">
          Most IT services agencies discover project losses months after delivery. Their timesheets live in one tool, accounting in another, and project tracking in a third. By the time someone exports the CSVs and builds a spreadsheet, the damage is done.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          CorporateHub exists to close that gap. We deploy integrated profitability and utilization visibility systems so agencies can see which projects earn and which lose &mdash; while there is still time to act.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">How We Got Here</h2>
        <p className="text-lg text-gray-600 mb-4">
          CorporateHub was founded by an OCA (Odoo Community Association) maintainer who built the professional services module suite to solve the same visibility problem at their own agency. That work grew into 349 merged OCA pull requests, 24 maintained modules on Odoo 18.0, and 5 maintainer-owned repositories.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          The modules cover time tracking, project roles, utilization analysis, timesheet approval workflows, and project profitability reporting &mdash; the building blocks agencies need to answer &quot;are we making money on this project?&quot; before the project ends.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-4 space-y-2">
          <li><strong>Configuration first, customization second.</strong> 80% of the system is standard module configuration. Custom development is for the 20% that is genuinely unique to your workflow.</li>
          <li><strong>Open-source by default.</strong> Every module we deploy is OCA-published and open-source licensed. No vendor lock-in, no proprietary forks.</li>
          <li><strong>Show the work.</strong> Numbers over claims. Screenshots over promises. If we say deployment takes 1&ndash;3 weeks, we mean it &mdash; and we will show you why.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg text-gray-600 mb-4">
          We deploy integrated time-tracking, project profitability, and utilization systems in 1&ndash;3 weeks for agencies of 10&ndash;30 people. The difference: we wrote the modules. You get the author, not someone configuring someone else&apos;s software.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          When something needs fixing or extending, we do not file a ticket upstream &mdash; we write the code and publish the fix to the OCA for everyone.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">See What This Looks Like for Your Agency</h2>
        <p className="text-xl text-gray-600 mb-8">15-minute call to assess whether your current tools give you the project-level visibility you need.</p>
        <Button asChild size="lg">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  )
}
