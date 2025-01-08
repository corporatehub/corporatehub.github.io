import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Notice - CorporateHub',
  description: 'Legal information about CorporateHub, including company details and hosting information.',
}

export default function LegalNotice() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Legal Notice (Mentions Légales)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Website Owner</h2>
        <p>SARL OLEKSII PELYKH</p>
        <p>540 1ère Avenue,</p>
        <p>06600 Antibes,</p>
        <p>FRANCE</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
        <ul>
          <li>SIREN: 899541163</li>
          <li>VAT Number: TVA FR81899541163</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>Email: hello@corphub.eu</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Hosting Provider</h2>
        <p>GitHub, Inc.</p>
        <p>88 Colin P. Kelly Jr. Street,</p>
        <p>San Francisco, CA 94107,</p>
        <p>United States</p>
        <p className="mt-4">
          For more information about GitHub&apos;s hosting services, please visit:{' '}
          <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://pages.github.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Director of Publication</h2>
        <p>Oleksii Pelykh</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
        <p>The CorporateHub is a registered trademark owned by SAS PELYKH HOLDINGS, used under license by SARL OLEKSII PELYKH.</p>
        <p>All other trademarks, product names, or company names mentioned on this website are the property of their respective owners.</p>
      </section>

      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

