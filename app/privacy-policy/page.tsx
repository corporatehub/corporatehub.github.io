import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - CorporateHub',
  description: 'Privacy Policy for CorporateHub, outlining our data collection and usage practices.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-4"><strong>Effective Date:</strong> 01 Jan 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>This Privacy Policy outlines how SARL OLEKSII PELYKH (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) manages and protects user information on this website. We are committed to respecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR) and other applicable laws.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. No Personal Data Collection</h2>
        <p>Our website does not collect, store, or process any personal data from its users. We do not use forms, tracking technologies, or analytics tools that require the collection of identifiable information.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. No Use of Cookies</h2>
        <p>We do not use cookies or any other tracking technologies on our website. This means:</p>
        <ul className="list-disc list-inside ml-4">
          <li>No cookies are stored on your device.</li>
          <li>No behavioral or personal data is tracked or collected during your visit.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Hosting Information</h2>
        <p>Our website is hosted on GitHub Pages, a platform provided by GitHub, Inc. GitHub may collect certain technical data, such as your IP address, for server logs and website performance monitoring. For more information about how GitHub processes data, please refer to their <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Statement</a>.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. External Links</h2>
        <p>Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies for information on how they handle data.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
        <p>Even though we do not process personal data, you have rights under GDPR, including the right to access, correct, or delete personal information and lodge a complaint with your local data protection authority if necessary.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
        <p><strong>Email:</strong> hello@corphub.eu</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Updates to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in legal or regulatory requirements. Any changes will be posted on this page with the updated effective date.</p>
      </section>

      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

