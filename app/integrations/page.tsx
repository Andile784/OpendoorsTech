import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "HubSpot-first API and webhook integrations for WhatsApp, email, Google Workspace, accounting, helpdesk, and custom systems."
};

const integrations = [
  "HubSpot CRM",
  "WhatsApp Business APIs",
  "Email platforms (SMTP, transactional APIs)",
  "Google Workspace",
  "Accounting and invoicing systems",
  "Helpdesk platforms",
  "Internal admin tools",
  "Relational databases",
  "Spreadsheet-driven workflows",
  "E-signature systems",
  "Payment gateways",
  "Calendar and booking tools",
  "Custom REST APIs",
  "Webhook event sources",
  "Document storage systems",
  "Data warehouses"
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Integrations</h1>
          <p className="mt-4 text-lg text-muted">
            We connect your existing system of work with API-first, webhook-enabled architecture so
            AI and automation produce reliable operational outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/integrations/hubspot" className="btn-secondary">
              Explore HubSpot Integrations
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Integration landscape</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item) => (
              <div key={item} className="card text-sm text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl font-semibold text-ink">Our integration approach</h2>
          <div className="mt-6 space-y-4 text-sm text-muted">
            <p>
              <span className="font-semibold text-ink">API-first design:</span> We define clear data
              contracts and versioning standards before implementation.
            </p>
            <p>
              <span className="font-semibold text-ink">Webhook-native workflows:</span> We process
              events asynchronously for speed and fault tolerance.
            </p>
            <p>
              <span className="font-semibold text-ink">Reliability controls:</span> Retries,
              idempotency keys, DLQ handling, and error alerting are included by default.
            </p>
            <p>
              <span className="font-semibold text-ink">Operational visibility:</span> Each workflow
              emits logs, metrics, and trace IDs for audit and debugging.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need to connect fragmented systems before adding more AI?"
        body="We integrate the stack you already rely on and make it production-stable."
      />
    </>
  );
}
