import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "HubSpot Integrations",
  description:
    "HubSpot-first AI integration architecture: data hygiene, lifecycle automation, omnichannel intake, and controlled agent actions."
};

const outcomes = [
  "Data hygiene automation for contact, company, and deal records",
  "Lifecycle stage automation based on behavioral and operational events",
  "Omnichannel lead intake from forms, WhatsApp, and email",
  "Controlled AI-assisted note generation and next-step recommendations",
  "SLA workflow automation across sales and support handoffs"
];

const packages = [
  "HubSpot Data Integrity Sprint (R35k-R70k)",
  "HubSpot Omnichannel Intake Build (R60k-R120k)",
  "HubSpot Agent-Assisted Pipeline Automation (R95k-R190k)",
  "HubSpot Operations Retainer (R30k-R90k/mo)"
];

export default function HubSpotPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            HubSpot Integration Engineering
          </h1>
          <p className="mt-4 text-lg text-muted">
            HubSpot is often the operational center for revenue teams. We make it trustworthy,
            connected, and automation-ready with governance controls built in.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/contact?intent=audit" className="btn-secondary">
              Request a HubSpot Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">HubSpot-specific outcomes</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {outcomes.map((item) => (
              <li key={item} className="card text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">HubSpot-focused packages</h2>
          <ul className="mt-6 grid gap-4">
            {packages.map((item) => (
              <li key={item} className="card text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Fix HubSpot reliability before scaling outbound and automation."
        body="Get a focused HubSpot integration roadmap with implementation options matched to your team and timeline."
      />
    </>
  );
}
