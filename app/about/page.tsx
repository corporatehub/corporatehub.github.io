import { Button } from "@/components/ui/button"
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About CorporateHub',
  description: 'Learn about CorporateHub\'s mission, vision, and unique value proposition in optimizing Odoo for businesses.',
}

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About CorporateHub</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-4">
          At CorporateHub, our mission is to empower businesses by optimizing their operations through tailored Odoo solutions. We believe in the power of customized approaches that align perfectly with each client&apos;s unique identity and needs.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-600 mb-4">
          We envision a business world where companies of all sizes can harness the full potential of their operations, driven by seamlessly integrated and finely tuned Odoo systems. Our goal is to be the catalyst that transforms this vision into reality for our clients.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Unique Value Proposition</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-4 space-y-2">
          <li>Tailored solutions that respect and enhance your company&apos;s unique identity</li>
          <li>Focus on tangible, measurable results that directly impact your bottom line</li>
          <li>Attention to subtle business process details that make a big difference</li>
          <li>Comprehensive services covering the entire Odoo lifecycle: from consultation to support</li>
          <li>Deep expertise in Odoo customization and integration with other business tools</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg text-gray-600 mb-4">
          We believe that one size doesn&apos;t fit all when it comes to business solutions. Our approach is rooted in understanding the intricacies of your business, identifying areas for improvement, and implementing customized Odoo solutions that drive real, measurable results. We work closely with our clients, ensuring that every step of the process aligns with their goals and vision.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 mb-8">Let&apos;s discuss how CorporateHub can help optimize your operations with tailored Odoo solutions.</p>
        <Button asChild size="lg">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">Schedule a Consultation</Link>
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

