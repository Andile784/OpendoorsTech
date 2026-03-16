import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "OpendoorsTech is an engineering-led, AWS-oriented integration partner focused on production-first AI workflows and governance."
};

const values = [
  {
    name: "Reliability",
    detail: "Automations must run consistently under real load and failure conditions."
  },
  {
    name: "Security",
    detail: "Data protection, access controls, and auditability are built into architecture from day one."
  },
  {
    name: "Measurable ROI",
    detail: "Each workflow is tied to operational KPIs such as response time, conversion rate, and manual hours saved."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">About OpendoorsTech</h1>
          <p className="mt-4 text-lg text-muted">
            We are an engineering-led team focused on AI integration architecture and agentic workflow
            automation deployed with AWS-oriented production standards.
          </p>
          <p className="mt-4 text-sm text-muted">
            Our mindset is production-first: architecture decisions are shaped by reliability,
            observability, and governance requirements, not demo-only prototypes.
          </p>
        </div>
      </section>

      <section className="section-space bg-panel">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-ink">How we think</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            AI is useful only when connected safely to the systems where work actually happens. We
            design with controlled actions, robust integration layers, and clear accountability.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.name} className="card">
                <h3 className="text-lg font-semibold text-ink">{value.name}</h3>
                <p className="mt-2 text-sm text-muted">{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a production-first integration partner?"
        body="Book a consultation and we will map your stack to a reliable AI integration roadmap."
      />
    </>
  );
}
