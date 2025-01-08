import Link from 'next/link'
import { commonStyles } from '../styles/common'

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className={`text-md ${commonStyles.heading} mb-4`}>CorporateHub<sup>®</sup></h4>
            <ul className="space-y-2">
              <li><Link href="/legal-notice" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Legal Notice</Link></li>
              <li><Link href="/privacy-policy" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={`text-md ${commonStyles.heading} mb-4`}>
              <Link href="/services" className={`${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Services</Link>
            </h4>
            <ul className="space-y-2">
              <li><Link href="/services/consultation" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Consultation</Link></li>
              <li><Link href="/services/training" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Training</Link></li>
              <li><Link href="/services/tuning" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Tuning</Link></li>
              <li><Link href="/services/data-sync-migration" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Data Sync & Migration</Link></li>
              <li><Link href="/services/deployment" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Deployment</Link></li>
              <li><Link href="/services/support" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={`text-md ${commonStyles.heading} mb-4`}>
              <Link href="/solutions" className={`${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Solutions</Link>
            </h4>
            <ul className="space-y-2">
              <li><Link href="/solutions/hubspot-odoo-sync-migration" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>HubSpot ↔ Odoo</Link></li>
              <li><Link href="/solutions/jira-odoo-sync-migration" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Jira ↔ Odoo</Link></li>
              <li><Link href="/solutions/tempo-timesheets-odoo-sync-migration" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Tempo Timesheets ↔ Odoo</Link></li>
              <li><Link href="/solutions/kantata-mavenlink-odoo-sync-migration" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Kantata/Mavenlink ↔ Odoo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={`text-md ${commonStyles.heading} mb-4`}>
              <Link href="/case-studies" className={`${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Case Studies</Link>
            </h4>
            <ul className="space-y-2">
              <li><Link href="/case-studies/manufacturing-erp-optimization" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Manufacturing ERP Optimization</Link></li>
              <li><Link href="/case-studies/business-bottlenecks-resolution" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Business Bottlenecks Resolution</Link></li>
              <li><Link href="/case-studies/productivity-increase-through-training" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Productivity Increase Through Training</Link></li>
              <li><Link href="/case-studies/retail-workforce-upskilling" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Retail Workforce Upskilling</Link></li>
              <li><Link href="/case-studies/hr-optimization-multinational-firm" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>HR Optimization for Multinational Firm</Link></li>
              <li><Link href="/case-studies/ux-enhancements-operational-efficiency" className={`text-sm ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>UX Enhancements for Operational Efficiency</Link></li>

            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className={`text-sm ${commonStyles.text} text-center`}>
            &copy; {new Date().getFullYear()} CorporateHub<span className="whitespace-nowrap">&nbsp;®</span>. All rights reserved. CorporateHub is a registered trademark in the European Union and may be registered or pending registration in other jurisdictions.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

