import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Production architecture patterns for AI integration: events, queues, retries, DLQ, idempotency, governance, and observability."
};

const patterns = [
  "Event-driven orchestration for decoupled service communication",
  "Queue-backed workloads with retries and dead-letter queues (DLQ)",
  "Idempotency keys for exactly-once business outcomes",
  "Secrets management and rotating credentials",
  "RBAC policies and scoped service permissions",
  "Encryption in transit and at rest",
  "Structured logging and centralized audit trails",
  "Metrics, tracing, and alert thresholds",
  "CI/CD with rollout controls and rollback strategy",
  "Runbooks and incident-response procedures"
];

const eventFlows = [
  "New form submission -> event bus -> AI enrichment -> HubSpot contact update -> audit log written",
  "Inbound WhatsApp query -> intent classification -> helpdesk ticket creation -> owner notification -> trace captured",
  "Invoice overdue event -> reminder workflow -> outbound email + CRM note -> payment status monitor",
  "Deal stage change -> qualification policy checks -> task generation for missing fields -> pass/fail logged",
  "Support SLA breach risk -> summarization -> escalation to priority queue -> manager alert + runbook reference"
];

export default function ArchitecturePage() {
  return (
    <>
      <section className="section-space">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Production Architecture Patterns
          </h1>
          <p className="mt-4 text-lg text-muted">
            Real workflow automation needs architecture that survives retries, failures, policy
            controls, and scale. We build for uptime, traceability, and safe AI execution.
          </p>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Core production patterns</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {patterns.map((item) => (
              <li key={item} className="card text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Reference architecture</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            Baseline pattern for integrating inbound channels, AI logic, business systems, and
            governance controls.
          </p>
          <div className="mt-6">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">Example event flows</h2>
          <ul className="mt-6 grid gap-4">
            {eventFlows.map((flow) => (
              <li key={flow} className="card text-sm text-muted">
                {flow}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <div className="card">
            <h2 className="text-2xl font-semibold text-ink">Implementation standards</h2>
            <p className="mt-3 text-sm text-muted">
              Every build includes readiness checks, observability dashboards, and runbook-driven
              support so your team can operate confidently after go-live.
            </p>
            <Link href="/book" className="btn-primary mt-5">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Need architecture before writing more automation scripts?"
        body="Request an architecture audit to identify the right event model, controls, and rollout path."
      />
    </>
  );
}
