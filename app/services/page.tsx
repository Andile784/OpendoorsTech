import type { Metadata } from "next";
import { OfferCards } from "@/components/OfferCards";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, webhook/microservice engineering, agentic workflow automation, and HubSpot-first systems integration services."
};

const pillars = [
  {
    title: "1) Architecture",
    text: "Integration blueprints for event-driven operations, reliability guardrails, and implementation governance."
  },
  {
    title: "2) Webhooks and Microservices",
    text: "Production endpoints, event processors, and resilient API workers that move data safely across systems."
  },
  {
    title: "3) Agentic Workflows",
    text: "Policy-controlled AI execution with confidence scoring, escalation paths, and human approvals."
  },
  {
    title: "4) CRM and Systems Integration",
    text: "HubSpot-first orchestration connected to WhatsApp, email, forms, helpdesk, accounting, databases, and custom APIs."
  }
];

const steps = [
  "Discovery and process mapping of your current system of work",
  "Architecture and data contract design",
  "Build and test in production-like environments",
  "Deploy with observability, runbooks, and team enablement",
  "Optimize monthly based on performance and business outcomes"
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Services</h1>
          <p className="mt-4 text-lg text-muted">
            We deliver architecture and implementation services that turn disconnected tools into
            reliable, measurable AI-assisted operations.
          </p>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Four delivery pillars</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Packaged offers and investment ranges</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            All packages include implementation governance, documentation, and deployment support.
          </p>
          <div className="mt-6">
            <OfferCards />
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">How we work</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step} className="card text-sm text-muted">
                <span className="font-semibold text-ink">Step {index + 1}: </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Frequently asked questions</h2>
          <div className="mt-6">
            <FAQ />
          </div>
        </div>
      </section>

      <CTASection
        title="Need an implementation partner, not another strategy deck?"
        body="Start with an audit or sprint and get deployable integration outcomes your team can measure."
      />
    </>
  );
}
