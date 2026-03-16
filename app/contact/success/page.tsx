import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Your qualification request has been submitted successfully."
};

export default function ContactSuccessPage() {
  return (
    <section className="section-space">
      <div className="container-max max-w-3xl">
        <div className="card">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Thanks, your request was submitted.
          </h1>
          <p className="mt-4 text-sm text-muted">
            Our team will review your workflow requirements and follow up shortly. For faster
            scheduling, book a consultation now.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/contact?intent=audit" className="btn-secondary">
              Request an Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
