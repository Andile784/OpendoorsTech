type UseCase = {
  title: string;
  flow: string[];
};

const cases: UseCase[] = [
  {
    title: "Inbound lead triage",
    flow: [
      "Trigger: Web form + WhatsApp message received",
      "AI: Classifies intent and urgency",
      "Action: Creates/updates HubSpot contact and deal",
      "Logged outcome: SLA starts with owner assignment"
    ]
  },
  {
    title: "Support escalation routing",
    flow: [
      "Trigger: Helpdesk ticket tagged high-risk",
      "AI: Summarizes context and root issue candidates",
      "Action: Routes to specialist queue and opens task",
      "Logged outcome: Escalation clock and trace ID captured"
    ]
  },
  {
    title: "Invoice follow-up automation",
    flow: [
      "Trigger: Invoice overdue in accounting system",
      "AI: Drafts context-aware payment reminder",
      "Action: Sends email/WhatsApp and updates CRM timeline",
      "Logged outcome: Collection attempt history available"
    ]
  },
  {
    title: "Sales handoff quality control",
    flow: [
      "Trigger: Deal stage changed to proposal",
      "AI: Checks required discovery fields",
      "Action: Blocks progression until data is complete",
      "Logged outcome: Governance pass/fail checkpoint stored"
    ]
  },
  {
    title: "Renewal risk monitoring",
    flow: [
      "Trigger: Contract reaches 90-day renewal window",
      "AI: Scores churn risk from activity and support signals",
      "Action: Alerts account manager with retention playbook",
      "Logged outcome: Risk trend and interventions tracked"
    ]
  },
  {
    title: "Operations exception handling",
    flow: [
      "Trigger: Integration event fails repeatedly",
      "AI: Categorizes likely failure mode",
      "Action: Routes to DLQ workflow and notifies ops",
      "Logged outcome: Failure reason and recovery steps archived"
    ]
  }
];

export function UseCaseCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cases.map((item) => (
        <article key={item.title} className="card">
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {item.flow.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
