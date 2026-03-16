import type { Metadata } from "next";
import Link from "next/link";
import { OfferCards } from "@/components/OfferCards";
import { UseCaseCards } from "@/components/UseCaseCards";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI Integration Architecture for Real Operations",
  description:
    "AI agents are useless without integration. OpendoorsTech builds AWS-ready webhooks, microservices, and controlled agent workflows that run inside your existing systems."
};

const pains = [
  "Leads enter from multiple channels but your CRM is incomplete or outdated.",
  "Your team manually copies data between WhatsApp, email, forms, and HubSpot.",
  "Automations break silently and no one knows what failed.",
  "You have AI tools, but they are disconnected from core operations.",
  "Handoffs between sales, ops, and support lose context.",
  "Integration projects keep stalling because architecture is unclear.",
  "Workflows are hard to audit for compliance and accountability.",
  "Your current stack cannot scale with transaction volume."
];

const outcomes = [
  "Reduce manual admin by 30-60% through event-driven automation.",
  "Cut lead response times from hours to minutes.",
  "Improve CRM field completeness to above 95% for key objects.",
  "Recover failed events automatically with retries and DLQ policies.",
  "Increase workflow throughput without increasing headcount.",
  "Establish full auditability for every AI-assisted action."
];

const pillars = [
  {
    title: "Architecture",
    body: "Production integration architecture with event contracts, reliability patterns, and governance controls.",
    href: "/architecture"
  },
  {
    title: "Webhooks + Microservices",
    body: "Webhook endpoints, queue-backed processors, and API services built for low-latency, high-confidence operations.",
    href: "/services"
  },
  {
    title: "Agentic Workflows",
    body: "Constrained AI agents with policy guardrails, approval gates, and deterministic action routing.",
    href: "/services"
  },
  {
    title: "CRM + Systems Integration",
    body: "HubSpot-first orchestration with operational systems including helpdesk, accounting, and custom APIs.",
    href: "/integrations"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-space">
        <div className="container-max">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">OpendoorsTech</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              AI agents are useless without integration. We make them operational.
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-muted">
              We design and build AWS-ready integration architecture using webhooks, microservices,
              API orchestration, and controlled agentic workflows that plug into your real system of
              work.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">
                Book a Consultation
              </Link>
              <Link href="/contact?intent=audit" className="btn-secondary">
                Request an Audit
              </Link>
              <Link href="/capability-statement.pdf" className="btn-secondary">
                Download Capability Statement
              </Link>
            </div>
            <ul className="mt-7 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
              <li className="rounded-lg border border-slate-200 p-3">
                Production AWS deployments for integration workloads
              </li>
              <li className="rounded-lg border border-slate-200 p-3">
                Guardrails, approvals, and auditable action trails
              </li>
              <li className="rounded-lg border border-slate-200 p-3">
                HubSpot-first design with reliable API contracts
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">If this sounds familiar</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {pains.map((item) => (
              <li key={item} className="card text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Outcomes teams can measure</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item} className="card text-sm text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Service pillars</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted">{pillar.body}</p>
                <Link href={pillar.href} className="mt-4 inline-block text-sm font-semibold text-brand">
                  Explore {pillar.title} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Packaged offers</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            Clear scope, real deliverables, and pricing aligned to implementation impact.
          </p>
          <div className="mt-6">
            <OfferCards />
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Reference architecture preview</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            We use event-driven architecture with reliable delivery semantics and operational
            observability baked in.
          </p>
          <div className="mt-6 animate-float">
            <ArchitectureDiagram />
          </div>
          <Link href="/architecture" className="mt-5 inline-block text-sm font-semibold text-brand">
            View full architecture patterns →
          </Link>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Use case workflows</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            Each workflow is designed as Trigger → AI → Action → Logged outcome to preserve control
            and accountability.
          </p>
          <div className="mt-6">
            <UseCaseCards />
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Trust and standards</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="card text-sm text-muted">
              Security-first controls including encryption, RBAC, and secret rotation practices.
            </div>
            <div className="card text-sm text-muted">
              POPIA-aware data handling and explicit consent-centered process design.
            </div>
            <div className="card text-sm text-muted">
              Full observability with metrics, traces, alerting, and incident-ready runbooks.
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to operationalize AI in your actual workflows?"
        body="Start with an architecture audit and leave with a prioritized implementation roadmap your team can execute immediately."
      />
    </>
  );
}
