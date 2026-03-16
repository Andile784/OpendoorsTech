import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a consultation to discuss your AI integration architecture and agentic workflow automation goals."
};

export default function BookPage() {
  return (
    <section className="section-space">
      <div className="container-max max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Book a Consultation</h1>
        <p className="mt-4 text-lg text-muted">
          Use your calendar tool of choice to embed booking below. Replace this placeholder with your
          live scheduling URL.
        </p>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-panel p-8 text-center">
          <p className="text-sm font-medium text-ink">Calendar Embed Placeholder</p>
          <p className="mt-2 text-sm text-muted">
            Replace this block with a Calendly/Cal.com iframe and set your meeting rules.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact?intent=audit" className="btn-secondary">
            Request an Audit
          </Link>
          <Link href="/services" className="btn-primary">
            Review Service Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
