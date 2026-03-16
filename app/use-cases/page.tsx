import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Production AI workflow use cases across sales, support, finance, and operations using trigger-driven integrations."
};

const workflows = [
  "Trigger: Website lead form submitted -> AI step: intent + ICP scoring -> Systems updated: HubSpot contact/deal + owner assignment -> Notifications: Slack to SDR lead owner -> Audit log: decision score + source payload -> Outcome: faster qualified lead response",
  "Trigger: WhatsApp inbound sales inquiry -> AI step: classify product interest + urgency -> Systems updated: HubSpot timeline + task queue -> Notifications: Account executive alert -> Audit log: message hash + routing policy -> Outcome: no high-intent leads missed",
  "Trigger: Deal moves to proposal stage -> AI step: evaluate missing qualification inputs -> Systems updated: HubSpot required fields + checklist task -> Notifications: Rep and manager warning if incomplete -> Audit log: policy validation result -> Outcome: cleaner pipeline data",
  "Trigger: New helpdesk ticket for enterprise client -> AI step: summarize issue and sentiment -> Systems updated: Helpdesk priority + CRM account risk flag -> Notifications: CSM + support lead escalation -> Audit log: summary version + escalation reason -> Outcome: faster SLA compliance",
  "Trigger: Invoice becomes overdue -> AI step: generate customer-specific reminder sequence -> Systems updated: Accounting note + CRM collections status -> Notifications: Finance owner + account manager -> Audit log: message content ID + send status -> Outcome: improved collection velocity",
  "Trigger: Contract renewal enters 90-day window -> AI step: churn risk assessment from usage + support data -> Systems updated: HubSpot renewal pipeline + risk score property -> Notifications: Retention playbook task list -> Audit log: scoring inputs + thresholds -> Outcome: reduced churn exposure",
  "Trigger: High-value deal stalls for 14 days -> AI step: recommend next-best action from historical patterns -> Systems updated: opportunity action plan -> Notifications: rep reminder + manager summary -> Audit log: recommendation confidence -> Outcome: shorter sales cycle lag",
  "Trigger: API integration error rate crosses threshold -> AI step: classify probable failure category -> Systems updated: incident ticket + DLQ replay queue -> Notifications: on-call engineer with runbook link -> Audit log: trace ID + remediation attempt -> Outcome: lower workflow downtime",
  "Trigger: Customer onboarding form completed -> AI step: extract key requirements and dependencies -> Systems updated: project board + CRM onboarding stage -> Notifications: implementation team kickoff briefing -> Audit log: extracted entities + confidence -> Outcome: faster onboarding handoff",
  "Trigger: Weekly operations checkpoint -> AI step: summarize bottlenecks and recurring exceptions -> Systems updated: KPI dashboard notes + backlog priorities -> Notifications: leadership summary email -> Audit log: report generation metadata -> Outcome: continuous process optimization"
];

export default function UseCasesPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Use Cases</h1>
          <p className="mt-4 text-lg text-muted">
            Ten examples of production workflows where trigger-driven AI and integrations create
            measurable operational outcomes.
          </p>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <div className="grid gap-4">
            {workflows.map((workflow) => (
              <article key={workflow} className="card text-sm text-muted">
                {workflow}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want these workflows mapped to your current stack?"
        body="Request a workflow audit and get a prioritized implementation plan with effort and ROI estimates."
      />
    </>
  );
}
