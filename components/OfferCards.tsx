type Offer = {
  name: string;
  timeline: string;
  priceRange: string;
  deliverables: string[];
};

const offers: Offer[] = [
  {
    name: "AI Integration Architecture Audit",
    timeline: "5-7 days",
    priceRange: "R25k-R55k",
    deliverables: [
      "Current-state integration map",
      "Risk and failure-point analysis",
      "Target AWS reference architecture",
      "Prioritized implementation backlog"
    ]
  },
  {
    name: "Integration Sprint",
    timeline: "2-3 weeks",
    priceRange: "R60k-R130k",
    deliverables: [
      "Webhook endpoints and data contracts",
      "2-4 production integrations",
      "Retries, alerting, and observability setup",
      "Handover documentation"
    ]
  },
  {
    name: "Agentic Workflow Build",
    timeline: "4-6 weeks",
    priceRange: "R120k-R260k",
    deliverables: [
      "Controlled agent decision layer",
      "Human-in-the-loop checkpoints",
      "Cross-system updates and audit logs",
      "Security and governance controls"
    ]
  },
  {
    name: "Monthly Retainer",
    timeline: "Month-to-month",
    priceRange: "R35k-R120k/mo",
    deliverables: [
      "Workflow reliability management",
      "Continuous optimization and reporting",
      "Incident response and change control",
      "Roadmap support for new integrations"
    ]
  }
];

export function OfferCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {offers.map((offer) => (
        <article key={offer.name} className="card">
          <p className="text-sm font-semibold text-brand">{offer.timeline}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{offer.name}</h3>
          <p className="mt-1 text-sm font-medium text-slate-700">{offer.priceRange}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {offer.deliverables.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
