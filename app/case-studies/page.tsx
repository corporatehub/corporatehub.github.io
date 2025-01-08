import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies - CorporateHub',
  description: 'Explore real-world examples of how CorporateHub has helped businesses optimize their operations with Odoo.',
}

const caseStudies = [
  {
    category: "Consultation",
    studies: [
      {
        title: "Streamlining Business Operations: How Tailored Consultations Transformed a Manufacturing Company&apos;s ERP System",
        description: "Discover how a manufacturing company optimized their ERP processes with a personalized, step-by-step approach to Odoo alignment.",
        link: "/case-studies/manufacturing-erp-optimization"
      },
      {
        title: "From Frustration to Clarity: Addressing Key Business Bottlenecks with CorporateHub&apos;s Expert Consultation",
        description: "See how expert consultation identified and resolved critical bottlenecks for a business.",
        link: "/case-studies/business-bottlenecks-resolution"
      }
    ]
  },
  {
    category: "Training",
    studies: [
      {
        title: "Empowering Teams: How Customized Odoo Training Increased Productivity by 40%",
        description: "See how customized training improved productivity and team collaboration for a business.",
        link: "/case-studies/productivity-increase-through-training"
      },
      {
        title: "Bridging the Skills Gap: Rapid Upskilling of a Retail Workforce Using CorporateHub Training Programs",
        description: "Explore how CorporateHub&apos;s training sessions equipped a retail workforce with essential Odoo skills in record time.",
        link: "/case-studies/retail-workforce-upskilling"
      }
    ]
  },
  {
    category: "Tuning",
    studies: [
      {
        title: "Optimizing HR with Odoo: Advanced Time-Off Management for a Multinational Firm",
        description: "Learn how our tuning services enhanced HR management for a global organization.",
        link: "/services/tuning"
      },
      {
        title: "Precision Billing for Projects: Granular Timesheet Controls That Improved Revenue Transparency",
        description: "A closer look at tuning project and timesheet modules to enable accurate financial tracking and reporting.",
        link: "/case-studies/precision-billing-timesheet-controls"
      },
      {
        title: "Seamless User Experience: Personalized Locale Settings Revolutionize Daily Operations",
        description: "Find out how our UX tuning services improved workflows and user satisfaction.",
        link: "/case-studies/ux-enhancements-operational-efficiency"
      }
    ]
  },
  {
    category: "Data Sync & Migration",
    studies: [
      {
        title: "A Seamless Transition: Migrating from HubSpot to Odoo Without Downtime",
        description: "Follow the journey of a smooth CRM migration that preserved data integrity and ensured business continuity.",
        link: "/case-studies/hubspot-to-odoo-migration"
      },
      {
        title: "Unifying Platforms: Synchronizing Jira and Odoo for Enhanced Project Collaboration",
        description: "Learn how integrating Jira and Odoo streamlined workflows and improved cross-department communication.",
        link: "/case-studies/jira-odoo-integration"
      },
      {
        title: "Tempo Timesheets Meets Odoo: Unlocking Advanced Time Tracking and Reporting",
        description: "Discover the benefits of syncing Tempo Timesheets with Odoo for enhanced time management and reporting capabilities.",
        link: "/case-studies/tempo-timesheets-odoo-sync"
      }
    ]
  },
  {
    category: "Deployment",
    studies: [
      {
        title: "One-Size-Doesn&apos;t-Fit-All: A Step-by-Step Odoo Deployment Tailored for an E-Commerce Giant",
        description: "See how a bespoke deployment strategy met the unique operational needs of a large e-commerce business.",
        link: "/case-studies/ecommerce-odoo-deployment"
      },
      {
        title: "Scaling Without Compromise: Deploying Odoo to Support a Rapidly Growing SaaS Startup",
        description: "Learn how we tailored Odoo deployment to meet the unique needs of a SaaS startup.",
        link: "/case-studies/saas-startup-odoo-deployment"
      }
    ]
  },
  {
    category: "Support Services",
    studies: [
      {
        title: "Post-Deployment Success: Continuous Odoo Support for a Logistics Firm&apos;s Dynamic Needs",
        description: "Discover the benefits of ongoing support for a logistics company&apos;s ERP system.",
        link: "/case-studies/logistics-firm-continuous-support"
      },
      {
        title: "From Good to Great: How CorporateHub&apos;s Proactive Support Resolved Hidden ERP Challenges",
        description: "Learn how proactive support uncovered and addressed inefficiencies, driving long-term success.",
        link: "/case-studies/proactive-support-erp-challenges"
      }
    ]
  }
]

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Case Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore real-world examples of how CorporateHub has helped businesses optimize their operations with Odoo.
        </p>
      </header>

      {caseStudies.map((category, index) => (
        <section key={index} className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{category.category}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {category.studies.map((study, studyIndex) => (
              <Card key={studyIndex}>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Button asChild variant="outline">
                    <Link href={study.link} className="flex items-center">
                      {study.title.includes("HR Optimization") ? "Explore the Details" : study.title.includes("Productivity Increase") ? "Discover the Outcome" : study.title.includes("Logistics Firm") ? "Learn About Continuous Support" : study.title.includes("UX Enhancements") ? "See the Results" : study.title.includes("SaaS Startup") ? "Read the Case Study" : study.title.includes("Business Bottlenecks") ? "Find Out How" : "Read More"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="text-center rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how CorporateHub can help optimize your Odoo experience and drive tangible results for your business.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank" className="flex items-center">
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
  )
}

