import Link from "next/link";

type CTASectionProps = {
  title: string;
  body: string;
};

export function CTASection({ title, body }: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="container-max">
        <div className="rounded-2xl border border-slate-200 bg-ink px-6 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">{body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary bg-white text-ink hover:bg-slate-200">
              Book a Consultation
            </Link>
            <Link
              href="/contact?intent=audit"
              className="inline-flex items-center justify-center rounded-lg border border-white/80 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request an Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
