import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Submit your qualification details for an AI integration architecture consultation or workflow audit."
};

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-max">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Contact and Qualification
          </h1>
          <p className="mt-4 text-lg text-muted">
            Tell us how your current systems work, where workflows break, and what outcome you need.
            We will review fit and suggest the next best package.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/capability-statement.pdf" className="btn-secondary">
              Download Capability Statement
            </Link>
          </div>
        </div>
        <div className="mt-10 max-w-4xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
