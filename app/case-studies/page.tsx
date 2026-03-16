import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, GitPullRequest, Package, GitFork, Shield, Users, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Work - CorporateHub',
  description: '349 merged pull requests, 50 modules authored, 25 OCA repositories. Real open-source contributions you can verify on GitHub.',
}

const stats = [
  { label: "Merged PRs", value: "349", icon: GitPullRequest },
  { label: "Modules Authored", value: "50", icon: Package },
  { label: "OCA Repos", value: "25", icon: GitFork },
  { label: "PSC Memberships", value: "6", icon: Shield },
]

const problemCards = [
  {
    question: "Where is my team\u2019s time going?",
    modules: "hr_timesheet_report, hr_timesheet_sheet (+ autodraft, policy), hr_timesheet_task_stage, hr_timesheet_task_domain, sale_timesheet_line_exclude",
    note: "19 timesheet modules authored. The most comprehensive OCA timesheet suite.",
    link: "https://github.com/OCA/timesheet",
  },
  {
    question: "Are my projects profitable?",
    modules: "hr_utilization_report, hr_utilization_analysis, project_role, hr_timesheet_role",
    note: "Utilization and role-based costing \u2014 see which projects earn and which lose.",
    link: "https://github.com/OCA/timesheet",
  },
  {
    question: "My team data is scattered across systems",
    modules: "hr_employee_relatives, hr_employee_ssn, hr_employee_service, hr_employee_service_contract, hr_contract_currency, hr_holidays_accrual_advanced",
    note: "12 HR modules authored. Multi-currency contracts, advanced leave accruals, employee records.",
    link: "https://github.com/OCA/hr",
  },
  {
    question: "My bank statements won\u2019t import cleanly",
    modules: "account_statement_import_online (framework), account_statement_import_online_paypal, account_bank_statement_import_split",
    note: "Built the online bank statement import framework used across OCA.",
    link: "https://github.com/OCA/bank-statement-import",
  },
]

const beyondSuite = [
  {
    label: "Jira connector",
    description: "connector_jira improvements (user binding, estimation, epic link)",
    link: "https://github.com/OCA/connector-jira",
  },
  {
    label: "Currency rates",
    description: "currency_rate_update (XE.com, OpenExchangeRates, TransferWise providers)",
    link: "https://github.com/OCA/currency",
  },
  {
    label: "Web widgets",
    description: "web_widget_x2many_2d_matrix, web_widget_dropdown_dynamic",
    link: "https://github.com/OCA/web",
  },
  {
    label: "Mail",
    description: "mail_activity_reminder",
    link: "https://github.com/OCA/mail",
  },
]

const pscMemberships = [
  { team: "Human Resources", repos: 7 },
  { team: "Banking", repos: 5 },
  { team: "Project & Service", repos: 8 },
  { team: "Currency", repos: 1 },
  { team: "Local Estonia", repos: 1 },
  { team: "Local Ukraine", repos: 1, note: "PSC representative" },
]

export default function OurWork() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Hero */}
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Our Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything we deploy is open-source and publicly verifiable.
        </p>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <stat.icon className="h-6 w-6 text-primary mb-2" />
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Professional Services Suite */}
      <section className="mb-12 md:mb-16" id="professional-services-suite">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Services Suite</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          The modules IT services agencies use to see project profitability, track utilization, and control billing. Organized by the business problem they solve.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {problemCards.map((card) => (
            <Card key={card.question}>
              <CardHeader>
                <CardTitle className="text-xl">{card.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-mono text-muted-foreground mb-3">{card.modules}</p>
                <p className="text-muted-foreground mb-4">{card.note}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={card.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    View on GitHub <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Beyond the Agency Suite */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Beyond the Agency Suite</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
          We contribute across the Odoo ecosystem &mdash; not just professional services.
        </p>

        <ul className="space-y-3">
          {beyondSuite.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <ArrowRight className="h-4 w-4 mt-1 text-primary shrink-0" />
              <div>
                <span className="font-medium">{item.label}:</span>{" "}
                <span className="text-muted-foreground">{item.description}</span>
                {" &mdash; "}
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  {item.link.replace("https://github.com/", "")}
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Community Standing */}
      <section className="mb-12 md:mb-16" id="community-standing">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Community Standing</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          CorporateHub&apos;s founder is a PSC (Project Steering Committee) member in 6 OCA teams with merge authority across 20 repositories.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {pscMemberships.map((psc) => (
            <div key={psc.team} className="flex items-center gap-3 p-3 rounded-lg border bg-card">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <div>
                <span className="font-medium text-sm">{psc.team}</span>
                <span className="text-xs text-muted-foreground block">
                  {psc.repos} {psc.repos === 1 ? "repo" : "repos"}
                  {psc.note ? ` \u2014 ${psc.note}` : ""}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground">
          PSC members review and merge community contributions. This means CorporateHub doesn&apos;t just use OCA modules &mdash; we help govern them.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center rounded-lg px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          See What This Looks Like for Your Agency
        </h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          15-minute call to assess whether your current tools give you the project-level visibility you need.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank" rel="noopener noreferrer" className="flex items-center">
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
