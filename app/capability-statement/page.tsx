import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "Concise capability statement for OpendoorsTech covering AI integration architecture, systems integration, controlled agent workflows, and delivery outcomes."
};

const capabilities = [
  {
    title: "Integration architecture",
    detail:
      "Event-driven solution design, system mapping, API contracts, and implementation governance for production environments."
  },
  {
    title: "Webhooks and microservices",
    detail:
      "Reliable endpoints, queue-backed processors, and low-latency services that move data safely across business systems."
  },
  {
    title: "Controlled agent workflows",
    detail:
      "AI-assisted actions with guardrails, approval gates, escalation paths, and full auditability."
  },
  {
    title: "CRM and systems integration",
    detail:
      "HubSpot-first orchestration across WhatsApp, email, forms, helpdesk, accounting, booking, and custom APIs."
  }
];

const differentiators = [
  "Production-first delivery with reliability, observability, and governance built in from day one.",
  "Integration-first thinking that connects AI to the systems where real work happens.",
  "AWS-oriented architecture patterns including retries, dead-letter queues, idempotency, and secure secret handling.",
  "Business-outcome focus tied to operational KPIs such as response time, data quality, throughput, and manual effort saved."
];

const outcomes = [
  "Reduce manual administration through event-driven automation.",
  "Improve lead response times and workflow handoff speed.",
  "Increase CRM data completeness and consistency across teams.",
  "Create clear audit trails for AI-assisted operational decisions."
];

const platforms = [
  "HubSpot CRM",
  "WhatsApp Business APIs",
  "Google Workspace",
  "Helpdesk platforms",
  "Accounting and invoicing systems",
  "Payment gateways",
  "Document storage",
  "Custom REST APIs and webhooks"
];

const engagementModels = [
  "Architecture audits",
  "Implementation sprints",
  "Agentic workflow builds",
  "Monthly optimization retainers"
];

export default function CapabilityStatementPage() {
  return (
    <section className="section-space bg-panel">
      <div className="container-max">
        <div className="overflow-hidden rounded-[32px] border border-line bg-white shadow-card">
          <div className="grid gap-8 bg-ink px-6 py-8 text-white sm:px-8 lg:grid-cols-[1.6fr_0.9fr] lg:px-10">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/cropped-logoOpen1-2.png"
                  alt="OpendoorsTech logo"
                  width={64}
                  height={30}
                  className="h-10 w-auto rounded bg-white/95 px-2 py-1"
                  priority
                />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandLight">
                  Capability Statement
                </p>
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                AI integration architecture and controlled workflow automation for production teams.
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
                OpendoorsTech designs and implements reliable integration architecture using APIs,
                webhooks, microservices, and policy-controlled AI workflows. We help teams connect
                fragmented systems, improve operational visibility, and deploy automation that is
                measurable, governed, and ready for real business use.
              </p>
            </div>

            <aside className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brandLight">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-100">
                <p className="font-semibold text-white">OpendoorsTech</p>
                <p>sales@opendoorstech.co.za</p>
                <p>+27 79 089 9186</p>
                <p>Johannesburg, South Africa</p>
                <p>www.opendoorstech.com</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/book" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>

          <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Core capabilities
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {capabilities.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-slate-200 p-5">
                      <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Typical outcomes
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {outcomes.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Why OpendoorsTech
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  {differentiators.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200 p-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl bg-panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Platforms and environments
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-muted">
                  {platforms.map((item) => (
                    <li key={item} className="rounded-2xl border border-white bg-white p-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Engagement models
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-muted">
                  {engagementModels.map((item) => (
                    <li key={item} className="rounded-2xl border border-white bg-white p-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-line bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Best fit
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Ideal for teams that rely on HubSpot and adjacent systems but need tighter data
                  flow, more dependable automation, and safer AI-assisted execution across sales,
                  operations, support, and finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
