import type { Metadata } from "next";
import Link from "next/link";
import { BookingCalendar } from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a consultation to discuss your AI integration architecture and agentic workflow automation goals."
};

export default function BookPage() {
  const bookingEmbedUrl =
    process.env.BOOKING_EMBED_URL ?? process.env.NEXT_PUBLIC_BOOKING_EMBED_URL ?? "";
  const hasLiveBooking = bookingEmbedUrl.trim().length > 0;

  return (
    <section className="section-space">
      <div className="container-max max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Book a Consultation</h1>
        <p className="mt-4 text-lg text-muted">
          {hasLiveBooking
            ? "Choose a time directly in our live scheduling calendar."
            : "Choose an available consultation slot below while the live scheduling embed is being configured."}
        </p>

        <div className="mt-8">
          {hasLiveBooking ? (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <iframe
                src={bookingEmbedUrl}
                title="Book a consultation"
                className="min-h-[900px] w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : (
            <BookingCalendar />
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact?intent=audit" className="btn-secondary">
            Request an Audit
          </Link>
          {hasLiveBooking ? (
            <a
              href={bookingEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Open Booking in New Tab
            </a>
          ) : null}
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
