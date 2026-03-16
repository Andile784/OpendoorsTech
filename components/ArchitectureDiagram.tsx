export function ArchitectureDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-xs text-slate-100 shadow-card sm:text-sm">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`[Forms / WhatsApp / Email / HubSpot]
                |
                v
       [API Gateway + Webhooks]
                |
                v
        [Event Bus / Queue Layer]
          |               |
          v               v
 [Agent Orchestrator]   [Workers]
          |               |
          +-------> [Business APIs]
                          |
                          v
         [HubSpot / Helpdesk / Accounting / DB]
                          |
                          v
              [Audit Logs + Metrics + Alerts]`}
      </pre>
    </div>
  );
}
