import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileCheck, HeadphonesIcon, Rocket, Settings, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Deployment Services - CorporateHub',
  description: 'Ensure a smooth Odoo implementation with CorporateHub\'s expert deployment services. We handle the technical complexities, allowing you to focus on your business growth.',
}

export default function DeploymentService() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Deployment Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Smooth, Stress-Free Odoo Rollout
        </p>
      </header>

      <section className="mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          At <strong>CorporateHub</strong>, we understand that deploying Odoo isn&apos;t just about getting the software up and running; it&apos;s about making it work seamlessly for your business from day one. Whether you&apos;re starting fresh or transitioning from a legacy system, our deployment services ensure a smooth and reliable rollout tailored to your needs.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose CorporateHub for Odoo Deployment?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Tailored Deployment Strategies</h3>
              <p className="text-muted-foreground">
                We don&apos;t believe in one-size-fits-all. Each business is unique, and so is its deployment journey. Our team analyzes your workflows, systems, and goals to craft a customized deployment strategy.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">End-to-End Support</h3>
              <p className="text-muted-foreground">
                From initial system configuration to the final rollout, we&apos;re by your side. We&apos;ll handle the technical complexities so you can focus on running your business.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Minimized Downtime</h3>
              <p className="text-muted-foreground">
                We know time is money. Our deployment process is designed to minimize disruption to your operations, ensuring a quick and efficient transition.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Expertise You Can Trust</h3>
              <p className="text-muted-foreground">
                With years of experience deploying Odoo for businesses across industries, we&apos;ve mastered the art of delivering seamless implementations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Deployment Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Deployment Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Discovery and Planning</h3>
              </div>
              <p className="text-muted-foreground">
                We start by understanding your current systems, processes, and goals. This phase ensures we design a deployment plan that aligns with your business needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Configuration and Customization</h3>
              </div>
              <p className="text-muted-foreground">
                Our experts configure Odoo modules to match your workflows. If needed, we tailor features to enhance functionality and usability for your team.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Data Migration</h3>
              </div>
              <p className="text-muted-foreground">
                Migrating critical business data can be daunting, but our tools and expertise ensure a safe and accurate transfer, so nothing gets left behind.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Integration with Existing Systems</h3>
              </div>
              <p className="text-muted-foreground">
                Need Odoo to work with other tools? We integrate Odoo seamlessly with platforms like HubSpot, Jira, Tempo Timesheets, and more to create a unified ecosystem.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Testing and Quality Assurance</h3>
              </div>
              <p className="text-muted-foreground">
                Before going live, we conduct rigorous testing to catch and resolve any issues. This ensures a smooth experience for your users from day one.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Deployment and Go-Live</h3>
              </div>
              <p className="text-muted-foreground">
                With all systems go, we execute the deployment plan, ensuring a seamless transition with minimal downtime.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <HeadphonesIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Post-Deployment Support</h3>
              </div>
              <p className="text-muted-foreground">
                Our job doesn&apos;t end at go-live. We offer ongoing support and troubleshooting to keep your system running smoothly and adapt to your evolving needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who Can Benefit from Our Deployment Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
          <li>Businesses migrating from legacy systems.</li>
          <li>Teams looking to implement Odoo for the first time.</li>
          <li>Organizations scaling their Odoo usage with additional modules and integrations.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Start Your Odoo Journey with Confidence</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ready to make your Odoo deployment a success? Let CorporateHub guide you every step of the way. Contact us today to discuss your needs and discover how we can make your Odoo rollout smooth, efficient, and stress-free.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">
            Get Started with Odoo Deployment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <footer className="text-center mt-16">
        <p className="text-lg font-semibold text-primary">
          CorporateHub – Making Business Run Smoother, One Step at a Time
        </p>
      </footer>
    </article>
  )
}

