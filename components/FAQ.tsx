const faqs = [
  {
    q: "Do you build marketing websites or SEO funnels?",
    a: "No. We focus on AI integration architecture, automation workflows, and production systems that run core operations."
  },
  {
    q: "What industries do you work with?",
    a: "We work across B2B service, SaaS, e-commerce, and operations-heavy teams where cross-system process reliability matters."
  },
  {
    q: "How quickly can we launch?",
    a: "Most clients start with a 5-7 day audit, then launch first production workflows within 2-6 weeks depending on complexity."
  },
  {
    q: "Can you work with our existing tools?",
    a: "Yes. We design around your current system of work including HubSpot, Google Workspace, WhatsApp, helpdesk, accounting, and custom APIs."
  },
  {
    q: "How do you handle reliability?",
    a: "We implement retries, dead-letter queues, idempotency keys, alerting, and runbooks so automations remain stable under load."
  },
  {
    q: "Do you include governance and security?",
    a: "Yes. We build with RBAC, secret management, encryption in transit and at rest, and detailed audit trails."
  },
  {
    q: "How is AI kept under control?",
    a: "Agents operate inside explicit policies, scoped actions, confidence thresholds, and escalation paths for human review."
  },
  {
    q: "Do you offer once-off projects or ongoing support?",
    a: "Both. We provide audits, implementation sprints, full workflow builds, and monthly retainers for continuous improvement."
  },
  {
    q: "Can you integrate with HubSpot specifically?",
    a: "Yes, HubSpot is our primary CRM integration focus including lifecycle automation, data hygiene, and omnichannel lead intake."
  },
  {
    q: "What does success look like?",
    a: "Reduced manual work, faster cycle times, cleaner data, fewer handoff failures, and observable ROI with measurable operational KPIs."
  }
];

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((item) => (
        <details key={item.q} className="card group">
          <summary className="cursor-pointer list-none text-base font-semibold text-ink">
            {item.q}
          </summary>
          <p className="mt-3 text-sm text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
